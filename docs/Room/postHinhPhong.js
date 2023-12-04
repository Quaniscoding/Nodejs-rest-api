module.exports = {
    "/post-phong-thue/upload-hinh-phong/{id}": {
        put: {
            tags: ["Ảnh phòng"],
            "operationId": "postAvatar",
            "consumes": [
                "multipart/form-data",
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
                }
            ],
            "requestBody": {
                "content": {
                    "multipart/formData": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "formFile": {
                                    "in": "formData",
                                    "type": "file",
                                    "format": "base64"
                                }
                            }
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