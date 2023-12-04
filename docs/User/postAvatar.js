module.exports = {
    "/api/post-nguoi-dung/avatar/{id}": {
        put: {
            tags: ["Người dùng"],
            "operationId": "postAvatar",
            "consumes": [
                "multipart/form-data",
                "image/png"
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
                "content": {
                    "image/png": {
                        "schema": {
                            "type": "string",
                            "format": "binary"
                            // "type": "object",
                            // "properties": {
                            //     "dataUpload": {
                            //         "type": "string",
                            //         "format": "binary"
                            //     }
                            // }
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