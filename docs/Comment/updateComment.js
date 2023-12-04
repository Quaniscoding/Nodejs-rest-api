module.exports = {
    "/api/updateComment/{id}": {
        put: {
            tags: ["Bình Luận"],
            "operationId": "updateComment",
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
                "description": "Update bình luận",
                "require": "true",
                "content": {
                    " application/json": {
                        schema: {
                            $ref: "#/components/schemas/BinhLuanViewModel",
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