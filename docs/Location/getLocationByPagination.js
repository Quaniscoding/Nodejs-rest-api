module.exports = {
    "/api/getRoom/getLocationByPagination/{pageIndex}/{pageSize}": {
        get: {
            tags: ["Vị trí"],
            "operationId": "getViTriPhanTrang",
            "consumes": [
                "application/json-patch+json",
                "application/json",
                "text/json",
                "application/*+json"
            ],
            "parameters": [
                {
                    "name": "pageIndex",
                    "in": "path",
                    "required": true,
                    "type": "integer",
                    "format": "int32"
                }, {
                    "name": "pageSize",
                    "in": "path",
                    "required": true,
                    "type": "integer",
                    "format": "int32"
                },
                {
                    "name": "keyword",
                    "in": "header",
                    "type": "string",
                },
                {
                    "name": "token",
                    "in": "header",
                    "description": "Nhập token",
                    "required": true,
                    "type": "string"
                }
            ],
            "responses": {
                "200": {
                    "description": "Success"
                }
            }
        },
    }
};