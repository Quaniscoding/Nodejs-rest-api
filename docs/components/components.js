module.exports = {
    "components": {
        "schemas": {
            "ThongTinNguoiDung": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "name": {
                        "type": "string",
                    },
                    "email": {
                        "type": "string",
                    },
                    "pass_word": {
                        "type": "string",
                    },
                    "phone": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "birthday": {
                        "type": "string",
                    },
                    "gender": {
                        "type": "boolean",
                    },
                    "role": {
                        "type": "string",
                    },
                }
            },
            "DangNhapView": {
                "type": "object",
                "properties": {
                    "email": {
                        "type": "string",
                    },
                    "pass_word": {
                        "type": "string"
                    }
                }
            },
            "BinhLuanViewModel": {
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "ma_phong": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "ma_nguoi_binh_luan": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "ngay_binh_luan": {
                        "type": "string",
                    },
                    "noi_dung": {
                        "type": "string",
                    },
                    "sao_binh_luan": {
                        "type": "integer",
                        "format": "int32"
                    },
                }
            },
            "DatPhongViewModel": {
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "ma_phong": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "ngay_den": {
                        "type": "string",
                        "format": "dateTime"
                    },
                    "ngay_di": {
                        "type": "string",
                        "format": "dateTime"
                    },
                    "so_luong_khach": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "ma_nguoi_dat": {
                        "type": "integer",
                        "format": "int32"
                    }
                }
            },
            "NguoiDungViewModel": {
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "name": {
                        "type": "string",
                    },
                    "email": {
                        "type": "string",
                    },
                    "pass_word": {
                        "type": "string",
                    },
                    "phone": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "birthday": {
                        "type": "string",
                    },
                    "gender": {
                        "type": "boolean",
                    },
                    "role": {
                        "type": "string",
                    },
                }
            },
            "CapNhatNguoiDung": {
                "properties": {
                    "id": {
                        "format": "int32",
                        "type": "integer"
                    },
                    "name": {
                        "type": "string"
                    },
                    "email": {
                        "type": "string"
                    },
                    "phone": {
                        "type": "string"
                    },
                    "birthday": {
                        "type": "string"
                    },
                    "gender": {
                        "type": "boolean"
                    },
                    "role": {
                        "type": "string"
                    }
                }
            },
            "PhongViewModel": {
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "ten_phong": {
                        "type": "string",
                    },
                    "khach": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "phong_ngu": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "giuong": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "phong_tam": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "mo_ta": {
                        "type": "string",
                    },
                    "gia_tien": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "may_giat": {
                        "type": "boolean",
                    },
                    "ban_la": {
                        "type": "boolean",
                    },
                    "ti_vi": {
                        "type": "boolean",
                    },
                    "dieu_hoa": {
                        "type": "boolean",
                    },
                    "wifi": {
                        "type": "boolean",
                    },
                    "bep": {
                        "type": "boolean",
                    },
                    "do_xe": {
                        "type": "boolean",

                    },
                    "ho_boi": {
                        "type": "boolean",
                    },
                    "ban_ui": {
                        "type": "boolean",
                    },
                    "ma_vi_tri": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "hinh_anh": {
                        "type": "string",
                    }
                }
            },
            "ViTriViewModel": {
                "properties": {
                    "id": {
                        "type": "integer",
                        "format": "int32"
                    },
                    "ten_vi_tri": {
                        "type": "string"
                    },
                    "tinh_thanh": {
                        "type": "string"
                    },
                    "quoc_gia": {
                        "type": "string"
                    },
                    "hinh_anh": {
                        "type": "string"
                    }
                }
            },
        },
    }
};