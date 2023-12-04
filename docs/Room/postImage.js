module.exports = {
    "/api/postImage/{id}": {
        put: {
            tags: ["Phòng"],
            "operationId": "postImage",
            "consumes": [
                "multipart/form-data",
            ],
            "parameters": [
                {
                    "name": "token",
                    "in": "header",
                    "description": "Nhập token",
                    "required": true,
                    "type": "string"
                }, {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "type": "string"
                },
            ],
            "requestBody": {
                "content": {
                    "image/png": {
                        "schema": {
                            "name": "dataUpload",
                            "type": "string",
                            "format": "binary"
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Success"
                }
            }
        },
    }
};
