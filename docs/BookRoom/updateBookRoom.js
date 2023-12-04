module.exports = {
    "/api/updateBookRoom/{id}": {
        put: {
            tags: ["Đặt phòng"],
            "operationId": "updateBookRoom",
            "consumes": [
                "application/json-patch+json",
                "application/json",
                "text/json",
                "application/*+json"
            ],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                }, {
                    "name": "token",
                    "in": "header",
                    "description": "Nhập token",
                    "required": true,
                    "type": "string"
                },

            ],
            "requestBody": {
                "description": "Update đặt phòng",
                "require": "true",
                "content": {
                    " application/json": {
                        schema: {
                            $ref: "#/components/schemas/DatPhongViewModel",
                        },

                    }
                },
            },
            "responses": {
                "200": {
                    "description": "Success"
                }
            }
        },
    }
};