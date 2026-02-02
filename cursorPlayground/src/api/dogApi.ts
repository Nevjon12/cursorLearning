import axios from 'axios';

const dogApi = axios.create({
  baseURL: 'https://dogapi.dog/api/v2',
  headers: { 'Content-Type': 'application/json' },
});

// JSON API types
export interface BreedAttributes {
  name: string;
  description: string;
  hypoallergenic: boolean;
  life: { min: number; max: number };
  male_weight: { min: number; max: number };
  female_weight: { min: number; max: number };
}

export interface BreedResource {
  id: string;
  type: string;
  attributes: BreedAttributes;
}

export interface FactResource {
  id: string;
  type: string;
  attributes: { body: string };
}

export interface JsonApiResponse<T> {
  data: T;
  links?: { self?: string; next?: string; last?: string };
}

export async function getBreeds(
  page = 1,
  pageSize = 10
): Promise<JsonApiResponse<BreedResource[]>> {
  const { data } = await dogApi.get<JsonApiResponse<BreedResource[]>>(
    '/breeds',
    {
      params: { 'page[number]': page, 'page[size]': pageSize },
    }
  );
  return data;
}

export async function getFacts(
  limit = 3
): Promise<JsonApiResponse<FactResource[]>> {
  const { data } = await dogApi.get<JsonApiResponse<FactResource[]>>(
    '/facts',
    { params: { limit } }
  );
  return data;
}
