export type ErrorsMapping = Record<string, { status?:number, responseMessage?:string }>;

export type Methods = "GET" | "DELETE" | "PUT" | "POST"

export type ExpressReturn = { isOk:boolean, result:any, status:number, contentType?:string }

export type SwaggerMetadataInterface = {
    required?:boolean, hide?:boolean,
}

export type ProjectConfigs =
{
    SERVER_PORT:number,

    DB_DIALECT?:string
    DB_NAME?:string

    DB_HOST?:string
    DB_PORT?:number
    DB_USER?:string
    DB_PASSWORD?:string
}


export type SearchQuery = Record<string, string | number | boolean | undefined | null>
export type ListOptions = { pageSize?:number, page?:number, orderBy?:string, order?:'ASC' | 'DESC'} & SearchQuery;
