module.exports = {
    "/api/updateUser/{id}": {
        put: {
            tags: ["Người dùng"],
            "operationId": "updateUser",
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
                "description": "Update người dùng",
                "require": "true",
                "content": {
                    " application/json": {
                        schema: {
                            $ref: "#/components/schemas/CapNhatNguoiDung",
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