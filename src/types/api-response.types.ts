export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

export interface Meta {
    page: number;
    limit: number;  
    totalPage: number; 
    totalData: number; 
}

export interface ApiPaginatedResponse<T> {
    success: boolean; 
    message: string; 
    data: T, 
    meta: Meta
}