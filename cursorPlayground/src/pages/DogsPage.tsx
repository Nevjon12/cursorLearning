import { useEffect, useState } from 'react';
import {
  Flex,
  Title,
  Table,
  Alert,
  Skeleton,

} from '@mantine/core';
import { getBreeds, type BreedResource } from '../api/dogApi';

export function DogsPage() {
  const [breeds, setBreeds] = useState<BreedResource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const breedsRes = await getBreeds(1, 10);
        if (!cancelled) setBreeds(breedsRes.data);
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : 'Failed to load dog data'
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <Flex component="main" direction="column" gap="md">
        <Title order={1}>Dogs</Title>
        <Alert color="red" title="Error">
          {error}
        </Alert>
      </Flex>
    );
  }

  return (
    <Flex component="main" direction="column" gap="md">
      <Title order={1}>Dogs</Title>
      {loading ? (
        <Skeleton height={200} />
      ) : (
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Description</Table.Th>
              <Table.Th>Life span (years)</Table.Th>
              <Table.Th>Hypoallergenic</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {breeds.map((breed) => (
              <Table.Tr key={breed.id}>
                <Table.Td>{breed.attributes.name}</Table.Td>
                <Table.Td>
                  {breed.attributes.description.length > 80
                    ? `${breed.attributes.description.slice(0, 80)}…`
                    : breed.attributes.description}
                </Table.Td>
                <Table.Td>
                  {breed.attributes.life.min}–{breed.attributes.life.max}
                </Table.Td>
                <Table.Td>
                  {breed.attributes.hypoallergenic ? 'Yes' : 'No'}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      )}
    </Flex>
  );
}
