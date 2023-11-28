module.exports = {
    "/api/auth/signin": {
        post: {
            tags: ["Auth"],
            "operationId": "DangNhap",
            "consumes": [
                "application/json-patch+json",
                "application/json",
                "text/json",
                "application/*+json"
            ],
            "produces": [
                "application/json",
            ],
            "requestBody": {
                "description": "Sign in",
                "require": "true",
                "content": {
                    " application/json": {
                        schema: {
                            $ref: "#/components/schemas/DangNhapView",
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