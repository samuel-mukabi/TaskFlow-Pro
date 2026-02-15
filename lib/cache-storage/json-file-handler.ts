import fs from 'fs/promises';
import path from 'path';

const CACHE_DIR = path.join(process.cwd(), 'data', 'local-cache');

export async function getFromJsonFile<T>(filename: string): Promise<T | null> {
    const filePath = path.join(CACHE_DIR, `${filename}.json`);
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data) as T;
    } catch (error: any) {
        if (error.code !== 'ENOENT') {
            console.error(`Error reading JSON cache file ${filename}:`, error);
        }
        return null;
    }
}

export async function setToJsonFile(filename: string, value: any): Promise<void> {
    const filePath = path.join(CACHE_DIR, `${filename}.json`);
    try {
        await fs.mkdir(CACHE_DIR, { recursive: true });
        await fs.writeFile(filePath, JSON.stringify(value, null, 2), 'utf-8');
    } catch (error) {
        console.error(`Error writing JSON cache file ${filename}:`, error);
    }
}

export async function deleteFromJsonFile(filename: string): Promise<void> {
    const filePath = path.join(CACHE_DIR, `${filename}.json`);
    try {
        await fs.unlink(filePath);
    } catch (error: any) {
        if (error.code !== 'ENOENT') {
            console.error(`Error deleting JSON cache file ${filename}:`, error);
        }
    }
}
