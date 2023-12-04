module.exports = {
    "/api/postLocation": {
        post: {
            tags: ["Vị trí"],
            "operationId": "postViTri",
            "consumes": [
                "application/json-patch+json",
                "application/json",
                "text/json",
                "application/*+json"
            ],
            "parameters": [{
                "name": "token",
                "in": "header",
                "description": "Nhập token",
                "required": true,
                "type": "string"
            }
            ],
            "requestBody": {
                "description": "Post Phòng thue",
                "require": "true",
                "content": {
                    " application/json": {
                        schema: {
                            $ref: "#/components/schemas/ViTriViewModel",
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