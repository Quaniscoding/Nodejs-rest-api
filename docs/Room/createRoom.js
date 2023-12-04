module.exports = {
    "/api/createRoom": {
        post: {
            tags: ["Phòng"],
            "operationId": "createRoom",
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
                "description": "Create room",
                "require": "true",
                "content": {
                    " application/json": {
                        schema: {
                            $ref: "#/components/schemas/PhongViewModel",
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