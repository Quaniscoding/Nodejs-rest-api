module.exports = {
    "/api/getLocation/getLocationByPagination?{pageIndex}?{pageSize}": {
        get: {
            tags: ["Vị trí"],
            "operationId": "getLocation",
            "consumes": [
                "application/json-patch+json",
                "application/json",
                "text/json",
                "application/*+json"
            ],
            "parameters": [
                {
                    "name": "pageIndex",
                    "in": "query",
                    "required": true,
                    "type": "integer",
                    "format": "int32"
                }, {
                    "name": "pageSize",
                    "in": "query",
                    "required": true,
                    "type": "integer",
                    "format": "int32"
                },
                {
                    "name": "keyWord",
                    "in": "query",
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