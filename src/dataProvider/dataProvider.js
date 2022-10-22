import {fetchUtils } from "react-admin";
import  {stringify} from 'qs';

const apiUrl='http://localhost:5000/api/';
const HttpClient=fetchUtils.fetchJson;

 const dataProvider={
   getList:(resource,params)=>{
    const { page, pageSize } = params.pagination;
    const { field, order } = params.sort;
    const query = {
        sort: JSON.stringify([[field, order]]),
        range: JSON.stringify([(page - 1) * pageSize, page * pageSize - 1]),
        filter: JSON.stringify(params.filter),
    };
    const url=`${apiUrl}admin/${resource}?${stringify(query)}`
    return HttpClient(url).then(({ headers, json }) => ({
        data: json,
        total: parseInt(headers.get('content-range').split('/').pop(), 10),
    }));
   },

   getOne:(resource,params)=>
    HttpClient(`${apiUrl}admin/${resource}/${params.id}`).then(({ json }) => ({
        data: json,
    })),


    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        const url = `${apiUrl}admin/${resource}?${stringify(query)}`;
        return HttpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}admin/${resource}?${stringify(query)}`;

        return HttpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },
}

export default dataProvider;