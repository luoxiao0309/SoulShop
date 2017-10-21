//常量
var provincesList = [
        {
            citys: [
                {
                    dataId: 303,
                    id: "d0f17d91-f06e-445c-959a-0817379325ca",
                    name: "钦州市",
                    provinceId: "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
                },
                {
                    dataId: 304,
                    id: "109e4928-33c8-4949-bce1-12f00cb17984",
                    name: "崇左市",
                    provinceId: "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
                },
                {
                    dataId: 305,
                    id: "38f71a71-fa64-4489-9ff7-27476712e21f",
                    name: "河池市",
                    provinceId: "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
                },
                {
                    dataId: 306,
                    id: "fad6d6cf-383d-4ef4-90dd-2b020e23351b",
                    name: "北海市",
                    provinceId: "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
                },
                {
                    dataId: 307,
                    id: "06641d5b-e8a5-4847-a06d-7310188548f9",
                    name: "梧州市",
                    provinceId: "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
                },
                {
                    dataId: 308,
                    id: "798b8282-87ee-446d-8076-91517906d2cd",
                    name: "南宁市",
                    provinceId: "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
                },
                {
                    dataId: 309,
                    id: "dae4b8d1-1a18-422e-83aa-ae8a40e63f6d",
                    name: "百色市",
                    provinceId: "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
                },
                {
                    dataId: 310,
                    id: "62508bb3-ffe0-4207-a954-c45a47092b88",
                    name: "桂林市",
                    provinceId: "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
                },
                {
                    dataId: 311,
                    id: "dfd657ab-3994-4cda-8b3c-dec470c53be2",
                    name: "来宾市",
                    provinceId: "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
                },
                {
                    dataId: 312,
                    id: "bac46955-d379-4146-a0b3-defdaadb1a16",
                    name: "贺州市",
                    provinceId: "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
                },
                {
                    dataId: 313,
                    id: "17e7c191-4e51-4aa4-bdf7-e6f79acf827c",
                    name: "玉林市",
                    provinceId: "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
                },
                {
                    dataId: 314,
                    id: "689da1d2-951f-4b64-9208-e762be59bdc1",
                    name: "柳州市",
                    provinceId: "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
                },
                {
                    dataId: 315,
                    id: "394d6cb1-aea1-4e4d-b547-ec192a7178ab",
                    name: "防城港市",
                    provinceId: "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
                },
                {
                    dataId: 316,
                    id: "b79de958-3052-4925-8d27-fbe60723362e",
                    name: "贵港市",
                    provinceId: "167ee47c-bc85-4b2e-87a0-00af5c2cd664"
                }
            ],
            id: "167ee47c-bc85-4b2e-87a0-00af5c2cd664",
            name: "广西壮族自治区",
            pinyin: "GUANGXI"
        },
        {
            citys: [
                {
                    dataId: 302,
                    id: "ae5ef87a-dd23-4139-bee2-6472ea8acf22",
                    name: "澳门特别行政区",
                    provinceId: "cb3d960c-0e17-473e-b735-0b076d47c79c"
                }
            ],
            id: "cb3d960c-0e17-473e-b735-0b076d47c79c",
            name: "澳门特别行政区",
            pinyin: "AOMEN"
        },
        {
            citys: [
                {
                    dataId: 285,
                    name: "三沙市",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 286,
                    name: "儋州市",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 287,
                    name: "五指山市",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 288,
                    name: "琼海市",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 289,
                    name: "文昌市",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 290,
                    name: "万宁市",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 291,
                    name: "东方市",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 292,
                    name: "定安县",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 293,
                    id: "49088680-af1f-4a11-8e66-3516bf6559e4",
                    name: "屯昌县",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 294,
                    id: "49088680-af1f-4a11-8e66-3516bf6559e4",
                    name: "澄迈县",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 295,
                    id: "49088680-af1f-4a11-8e66-3516bf6559e4",
                    name: "临高县",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 296,
                    id: "49088680-af1f-4a11-8e66-3516bf6559e4",
                    name: "白沙黎族自治县",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 297,
                    id: "49088680-af1f-4a11-8e66-3516bf6559e4",
                    name: "昌江黎族自治县",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 298,
                    id: "49088680-af1f-4a11-8e66-3516bf6559e4",
                    name: "乐东黎族自治县",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 299,
                    id: "49088680-af1f-4a11-8e66-3516bf6559e4",
                    name: "陵水黎族自治县",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 300,
                    id: "49088680-af1f-4a11-8e66-3516bf6559e4",
                    name: "保亭黎族苗族自治县",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                },
                {
                    dataId: 301,
                    id: "a7d45c49-3d3e-42a1-ad17-c3392280fe0e",
                    name: "琼中黎族苗族自治县",
                    provinceId: "e4ea5edf-5390-4137-bac4-15f2db76a299"
                }
            ],
            id: "e4ea5edf-5390-4137-bac4-15f2db76a299",
            name: "海南省",
            pinyin: "HAINAN"
        },
        {
            citys: [
                {
                    dataId: 280,
                    id: "57f9ae23-dc40-4771-b787-9d2a59e4e4d9",
                    name: "银川市",
                    provinceId: "0aea2c2e-da7c-4a98-b179-16bf4a26ee43"
                },
                {
                    dataId: 281,
                    id: "9c6beebd-0aac-43ac-80c1-1b8d3d0bb483",
                    name: "吴忠市",
                    provinceId: "0aea2c2e-da7c-4a98-b179-16bf4a26ee43"
                },
                {
                    dataId: 282,
                    id: "035eee51-48c3-4391-bf5c-0cbc1b93cf61",
                    name: "固原市",
                    provinceId: "0aea2c2e-da7c-4a98-b179-16bf4a26ee43"
                },
                {
                    dataId: 283,
                    id: "3a5e236b-27ee-47a8-bf05-0dc6944c18f8",
                    name: "石嘴山市",
                    provinceId: "0aea2c2e-da7c-4a98-b179-16bf4a26ee43"
                },
                {
                    dataId: 284,
                    id: "3cb6b6fa-f9e5-4ee1-8be7-45271a882d31",
                    name: "中卫市",
                    provinceId: "0aea2c2e-da7c-4a98-b179-16bf4a26ee43"
                }
            ],
            id: "0aea2c2e-da7c-4a98-b179-16bf4a26ee43",
            name: "宁夏回族自治区",
            pinyin: "NINGXIA"
        },
        {
            citys: [
                {
                    dataId: 272,
                    id: "2489823e-ccfa-4a0c-a375-96d48748149d",
                    name: "海北藏族自治州",
                    provinceId: "6a02c31f-47e5-4e64-8213-1cf17d02f06f"
                },
                {
                    dataId: 273,
                    id: "ac39c604-8e38-4564-90fe-895cfa17c595",
                    name: "黄南藏族自治州",
                    provinceId: "6a02c31f-47e5-4e64-8213-1cf17d02f06f"
                },
                {
                    dataId: 274,
                    id: "d7647762-9fa9-4089-8c35-73d409059903",
                    name: "果洛藏族自治州",
                    provinceId: "6a02c31f-47e5-4e64-8213-1cf17d02f06f"
                },
                {
                    dataId: 275,
                    id: "49aa2eb9-03c8-42f0-8331-766a03ba24aa",
                    name: "西宁市",
                    provinceId: "6a02c31f-47e5-4e64-8213-1cf17d02f06f"
                },
                {
                    dataId: 276,
                    id: "7e94ccef-0781-46ec-81c5-7fe7c83bbcf2",
                    name: "玉树藏族自治州",
                    provinceId: "6a02c31f-47e5-4e64-8213-1cf17d02f06f"
                },
                {
                    dataId: 277,
                    id: "07f3e9f8-2dd4-453d-93f6-6e6d2715c8e4",
                    name: "海西蒙古族藏族自治州",
                    provinceId: "6a02c31f-47e5-4e64-8213-1cf17d02f06f"
                },
                {
                    dataId: 278,
                    id: "b9b1fbaa-2e7d-4502-be74-c1783b624023",
                    name: "海南藏族自治州",
                    provinceId: "6a02c31f-47e5-4e64-8213-1cf17d02f06f"
                },
                {
                    dataId: 279,
                    id: "f1fb3c7b-61c8-4787-ac17-fbc6cc333e2c",
                    name: "海东地区",
                    provinceId: "6a02c31f-47e5-4e64-8213-1cf17d02f06f"
                }
            ],
            id: "6a02c31f-47e5-4e64-8213-1cf17d02f06f",
            name: "青海省",
            pinyin: "QINGHAI"
        },
        {
            citys: [
                {
                    dataId: 3,
                    id: "035c8acb-b607-46f9-a01f-ede1aa1184c8",
                    name: "舟山市",
                    provinceId: "74d26654-0be5-43df-9a4f-20115b8d7584"
                },
                {
                    dataId: 4,
                    id: "10b76e0c-9c22-4a1c-8405-ef251b727d19",
                    name: "湖州市",
                    provinceId: "74d26654-0be5-43df-9a4f-20115b8d7584"
                },
                {
                    dataId: 2,
                    id: "1020ae0e-bdcf-4f96-9dc9-e182c120b20b",
                    name: "嘉兴市",
                    provinceId: "74d26654-0be5-43df-9a4f-20115b8d7584"
                },
                {
                    dataId: 5,
                    id: "5a6785ed-9945-482a-ae4f-bc823e84a7ca",
                    name: "衢州市",
                    provinceId: "74d26654-0be5-43df-9a4f-20115b8d7584"
                },
                {
                    dataId: 6,
                    id: "9d12babb-ffaf-488d-aa4e-95d4242e07c9",
                    name: "金华市",
                    provinceId: "74d26654-0be5-43df-9a4f-20115b8d7584"
                },
                {
                    dataId: 7,
                    id: "38ae5f8e-c5ec-48ab-b01e-c6a0baca0f55",
                    name: "台州市",
                    provinceId: "74d26654-0be5-43df-9a4f-20115b8d7584"
                },
                {
                    dataId: 8,
                    id: "6d46f05c-5059-4ec7-8aa7-cd9229244cbd",
                    name: "宁波市",
                    provinceId: "74d26654-0be5-43df-9a4f-20115b8d7584"
                },
                {
                    dataId: 9,
                    id: "a8fefdfa-1ff5-4b99-8493-6aea6d522597",
                    name: "杭州市",
                    provinceId: "74d26654-0be5-43df-9a4f-20115b8d7584"
                },
                {
                    dataId: 1,
                    id: "8193d0d2-5efb-4c8b-9d19-45be3b4c5116",
                    name: "丽水市",
                    provinceId: "74d26654-0be5-43df-9a4f-20115b8d7584"
                },
                {
                    dataId: 10,
                    id: "6f3549a9-cd21-4643-89a9-44e09180dfee",
                    name: "温州市",
                    provinceId: "74d26654-0be5-43df-9a4f-20115b8d7584"
                },
                {
                    dataId: 11,
                    id: "01864ca2-65cc-4562-8b7f-04328948339c",
                    name: "绍兴市",
                    provinceId: "74d26654-0be5-43df-9a4f-20115b8d7584"
                }
            ],
            id: "74d26654-0be5-43df-9a4f-20115b8d7584",
            name: "浙江省",
            pinyin: "ZHEJIANG"
        },
        {
            citys: [
                {
                    dataId: 12,
                    id: "ae5ef87a-dd23-4139-bee2-6472ea8acf23",
                    name: "香港特别行政区",
                    provinceId: "abf30916-9972-41cb-814e-24eac24e8ce6"
                }
            ],
            id: "abf30916-9972-41cb-814e-24eac24e8ce6",
            name: "香港特别行政区",
            pinyin: "XIANGGANG"
        },
        {
            citys: [
                {
                    dataId: 263,
                    id: "077f1c32-c977-44dc-889f-5bc37e06cb55",
                    name: "黔南布依族苗族自治州",
                    provinceId: "23b3c109-452c-4b07-8d77-27349f5420ba"
                },
                {
                    dataId: 264,
                    id: "c1e92ffd-f662-462c-93d9-4e88bad214d2",
                    name: "铜仁地区",
                    provinceId: "23b3c109-452c-4b07-8d77-27349f5420ba"
                },
                {
                    dataId: 265,
                    id: "6f193bc3-7bab-4ed6-ae8a-3e3e777a3c2f",
                    name: "黔西南布依族苗族自治州",
                    provinceId: "23b3c109-452c-4b07-8d77-27349f5420ba"
                },
                {
                    dataId: 266,
                    id: "2f662d7b-fc51-495f-8f22-065d7019517c",
                    name: "黔东南苗族侗族自治州",
                    provinceId: "23b3c109-452c-4b07-8d77-27349f5420ba"
                },
                {
                    dataId: 267,
                    id: "413a067a-b658-4cd4-b529-0f9d8d14e556",
                    name: "安顺市",
                    provinceId: "23b3c109-452c-4b07-8d77-27349f5420ba"
                },
                {
                    dataId: 268,
                    id: "74ca1cf6-3a90-450e-816d-105a5de3e094",
                    name: "贵阳市",
                    provinceId: "23b3c109-452c-4b07-8d77-27349f5420ba"
                },
                {
                    dataId: 269,
                    id: "3a24078c-1184-4afb-a471-711cab81f909",
                    name: "毕节地区",
                    provinceId: "23b3c109-452c-4b07-8d77-27349f5420ba"
                },
                {
                    dataId: 270,
                    id: "be0c0d6f-3ce0-4067-9f20-97b0352e4982",
                    name: "遵义市",
                    provinceId: "23b3c109-452c-4b07-8d77-27349f5420ba"
                },
                {
                    dataId: 271,
                    id: "be7919ae-8c59-4184-bf6a-d472396d1183",
                    name: "六盘水市",
                    provinceId: "23b3c109-452c-4b07-8d77-27349f5420ba"
                }
            ],
            id: "23b3c109-452c-4b07-8d77-27349f5420ba",
            name: "贵州省",
            pinyin: "GUIZHOU"
        },
        {
            citys: [
                {
                    dataId: 253,
                    id: "d7f5202d-404c-411f-8ec1-ce4a6169ff68",
                    name: "延安市",
                    provinceId: "52870c17-e12b-44a9-83e7-2a550d1171b8"
                },
                {
                    dataId: 254,
                    id: "5c3365b4-7414-4d24-a21b-d72810be95f0",
                    name: "渭南市",
                    provinceId: "52870c17-e12b-44a9-83e7-2a550d1171b8"
                },
                {
                    dataId: 255,
                    id: "ee4f7af5-4007-4009-b81c-8bf8c232b23f",
                    name: "宝鸡市",
                    provinceId: "52870c17-e12b-44a9-83e7-2a550d1171b8"
                },
                {
                    dataId: 256,
                    id: "abe23f4d-e5b2-4cdf-bc7a-6afac7bebccf",
                    name: "安康市",
                    provinceId: "52870c17-e12b-44a9-83e7-2a550d1171b8"
                },
                {
                    dataId: 257,
                    id: "96b0ee6a-8c15-4e17-948f-6dac92cb7cae",
                    name: "铜川市",
                    provinceId: "52870c17-e12b-44a9-83e7-2a550d1171b8"
                },
                {
                    dataId: 258,
                    id: "001f31d3-4cf0-4fba-8a65-27344053f422",
                    name: "西安市",
                    provinceId: "52870c17-e12b-44a9-83e7-2a550d1171b8"
                },
                {
                    dataId: 259,
                    id: "17f58e4c-7bf4-41e0-b4c3-219c575c8a12",
                    name: "榆林市",
                    provinceId: "52870c17-e12b-44a9-83e7-2a550d1171b8"
                },
                {
                    dataId: 260,
                    id: "83416a5d-5642-4659-8b97-568cb3f79b59",
                    name: "汉中市",
                    provinceId: "52870c17-e12b-44a9-83e7-2a550d1171b8"
                },
                {
                    dataId: 261,
                    id: "d53c7c01-05d0-4035-852e-f40a341882ef",
                    name: "咸阳市",
                    provinceId: "52870c17-e12b-44a9-83e7-2a550d1171b8"
                },
                {
                    dataId: 262,
                    id: "d57f680b-7fc0-439c-864d-fd918f6011c6",
                    name: "商洛市",
                    provinceId: "52870c17-e12b-44a9-83e7-2a550d1171b8"
                }
            ],
            id: "52870c17-e12b-44a9-83e7-2a550d1171b8",
            name: "陕西省",
            pinyin: "SHANXI"
        },
        {
            citys: [
                {
                    dataId: 237,
                    id: "a633975d-3494-40fb-afa1-5612324ce687",
                    name: "昭通市",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 238,
                    id: "33416fef-8cad-4921-b1e6-585f9938d47a",
                    name: "怒江傈僳族自治州",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 239,
                    id: "a72a5105-a3ea-49a2-92d9-3da8fefea0d5",
                    name: "临沧市",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 240,
                    id: "302d0a3e-2c11-4618-a7ea-4a2beffae5af",
                    name: "文山壮族苗族自治州",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 241,
                    id: "da105cd2-f200-4fe0-8bc9-472ee8a7a3b8",
                    name: "西双版纳傣族自治州",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 242,
                    id: "e6df04bc-8ef6-4b58-b734-358a91a9c278",
                    name: "楚雄彝族自治州",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 243,
                    id: "88aa9345-0fdd-4d55-b5db-2dc45fa1e158",
                    name: "丽江市",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 244,
                    id: "b21abebb-942e-4f22-b85f-151fd1431c7b",
                    name: "德宏傣族景颇族自治州",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 245,
                    id: "a33036dc-e507-445e-a924-00f8287654d6",
                    name: "保山市",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 246,
                    id: "f3208ae7-4c1f-4a8e-a239-774c0efff470",
                    name: "大理白族自治州",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 247,
                    id: "40b4b40e-b0c0-4abf-bb6a-88d4c90ae3b8",
                    name: "迪庆藏族自治州",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 248,
                    id: "e5eed04e-baf0-4e77-acd6-9e3fe68fbfbf",
                    name: "玉溪市",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 249,
                    id: "381635c3-eb99-4270-b37a-991a1bbfc724",
                    name: "红河哈尼族彝族自治州",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 250,
                    id: "5ad150e3-e732-4ef5-93e1-d66d330a2d3f",
                    name: "曲靖市",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 251,
                    id: "da21e4c6-342e-4d6a-b8e5-c9252b2b5c29",
                    name: "思茅市",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                },
                {
                    dataId: 252,
                    id: "09891418-1858-4821-a77f-ad971f048801",
                    name: "昆明市",
                    provinceId: "6e807b58-07e7-40cf-8971-3756750ba62a"
                }
            ],
            id: "6e807b58-07e7-40cf-8971-3756750ba62a",
            name: "云南省",
            pinyin: "YUNNAN"
        },
        {
            citys: [
                {
                    dataId: 236,
                    id: "7d04e3a1-ee87-431c-9aa7-ac245014c51a",
                    name: "上海市",
                    provinceId: "3abcf245-505f-4342-b4d0-3dabd8cadb7f"
                }
            ],
            id: "3abcf245-505f-4342-b4d0-3dabd8cadb7f",
            name: "上海市",
            pinyin: "SHANGHAI"
        },
        {
            citys: [
                {
                    dataId: 223,
                    id: "30fab2f1-8f0d-48ae-9456-b52f7a2c7c9a",
                    name: "大庆市",
                    provinceId: "220c349a-b73a-426a-b250-4b27e59c45e8"
                },
                {
                    dataId: 224,
                    id: "9d368aa0-2152-47cc-9eea-bbfaf74919c1",
                    name: "大兴安岭地区",
                    provinceId: "220c349a-b73a-426a-b250-4b27e59c45e8"
                },
                {
                    dataId: 225,
                    id: "338f89e5-156b-4205-9e34-8fd2879d806f",
                    name: "双鸭山市",
                    provinceId: "220c349a-b73a-426a-b250-4b27e59c45e8"
                },
                {
                    dataId: 226,
                    id: "01344f0a-3242-48fd-aad6-7140042edc0b",
                    name: "鹤岗市",
                    provinceId: "220c349a-b73a-426a-b250-4b27e59c45e8"
                },
                {
                    dataId: 227,
                    id: "773a3f4f-0c62-4024-be0f-1180e4da8551",
                    name: "鸡西市",
                    provinceId: "220c349a-b73a-426a-b250-4b27e59c45e8"
                },
                {
                    dataId: 228,
                    id: "1514839b-d838-411b-b33a-282e2e72afc6",
                    name: "佳木斯市",
                    provinceId: "220c349a-b73a-426a-b250-4b27e59c45e8"
                },
                {
                    dataId: 229,
                    id: "17a95d4a-958c-4e4d-b7b8-289a92eb5370",
                    name: "七台河市",
                    provinceId: "220c349a-b73a-426a-b250-4b27e59c45e8"
                },
                {
                    dataId: 230,
                    id: "aa7f5ada-0fa6-45d4-9d98-479c43ce3964",
                    name: "伊春市",
                    provinceId: "220c349a-b73a-426a-b250-4b27e59c45e8"
                },
                {
                    dataId: 231,
                    id: "28fe794f-6fdf-42f0-88fb-482b6bb57ec3",
                    name: "哈尔滨市",
                    provinceId: "220c349a-b73a-426a-b250-4b27e59c45e8"
                },
                {
                    dataId: 232,
                    id: "1841df8b-2721-4179-9a5d-4abd1c8937f7",
                    name: "牡丹江市",
                    provinceId: "220c349a-b73a-426a-b250-4b27e59c45e8"
                },
                {
                    dataId: 233,
                    id: "695bb41d-52d4-4be1-b375-438a86e7e348",
                    name: "黑河市",
                    provinceId: "220c349a-b73a-426a-b250-4b27e59c45e8"
                },
                {
                    dataId: 234,
                    id: "f09a3b3a-f68f-4941-a504-551a2f9d3275",
                    name: "齐齐哈尔市",
                    provinceId: "220c349a-b73a-426a-b250-4b27e59c45e8"
                },
                {
                    dataId: 235,
                    id: "4a70ff61-9fd8-4af4-8d42-5359d5bf1a58",
                    name: "绥化市",
                    provinceId: "220c349a-b73a-426a-b250-4b27e59c45e8"
                }
            ],
            id: "220c349a-b73a-426a-b250-4b27e59c45e8",
            name: "黑龙江省",
            pinyin: "HEILONGJIANG"
        },
        {
            citys: [
                {
                    dataId: 209,
                    id: "ef89b763-e04e-4b16-94b0-56be622bf862",
                    name: "喀什地区",
                    provinceId: "07996592-1ab7-4669-996d-4efc79d5340b"
                },
                {
                    dataId: 210,
                    id: "c7ca0469-746d-414a-977f-481104fff97d",
                    name: "巴音郭楞蒙古自治州",
                    provinceId: "07996592-1ab7-4669-996d-4efc79d5340b"
                },
                {
                    dataId: 211,
                    id: "e471d605-826b-444d-a0c0-46fe5cbac943",
                    name: "吐鲁番地区",
                    provinceId: "07996592-1ab7-4669-996d-4efc79d5340b"
                },
                {
                    dataId: 212,
                    id: "6cd445c1-ce8b-4b25-9af1-2a57a7dbc1b6",
                    name: "克孜勒苏柯尔克孜自治州",
                    provinceId: "07996592-1ab7-4669-996d-4efc79d5340b"
                },
                {
                    dataId: 213,
                    id: "f542c2be-abae-44a4-a281-13dae0c7d66d",
                    name: "昌吉回族自治州",
                    provinceId: "07996592-1ab7-4669-996d-4efc79d5340b"
                },
                {
                    dataId: 214,
                    id: "462a6b1f-b5a5-4350-895c-018ad47721ac",
                    name: "伊犁哈萨克自治州",
                    provinceId: "07996592-1ab7-4669-996d-4efc79d5340b"
                },
                {
                    dataId: 215,
                    id: "8c4cebe8-c616-4498-995a-7f7e1fa65f07",
                    name: "阿勒泰地区",
                    provinceId: "07996592-1ab7-4669-996d-4efc79d5340b"
                },
                {
                    dataId: 216,
                    id: "0f2f4670-6283-45e5-af21-94491c16b1c4",
                    name: "塔城地区",
                    provinceId: "07996592-1ab7-4669-996d-4efc79d5340b"
                },
                {
                    dataId: 217,
                    id: "5ab6df27-de2a-466a-936e-c30a0df85a7f",
                    name: "阿克苏地区",
                    provinceId: "07996592-1ab7-4669-996d-4efc79d5340b"
                },
                {
                    dataId: 218,
                    id: "4e147b7e-f721-40cc-b231-c9cf1bf67559",
                    name: "哈密地区",
                    provinceId: "07996592-1ab7-4669-996d-4efc79d5340b"
                },
                {
                    dataId: 219,
                    id: "95e02f24-b82a-44bc-926d-c66bf54678a1",
                    name: "乌鲁木齐市",
                    provinceId: "07996592-1ab7-4669-996d-4efc79d5340b"
                },
                {
                    dataId: 220,
                    id: "29f008a3-f9c8-440c-810f-fdd318b2b1ec",
                    name: "博尔塔拉蒙古自治州",
                    provinceId: "07996592-1ab7-4669-996d-4efc79d5340b"
                },
                {
                    dataId: 221,
                    id: "6c71deb8-fb1a-44dc-88da-f8f7d54242c1",
                    name: "克拉玛依市",
                    provinceId: "07996592-1ab7-4669-996d-4efc79d5340b"
                },
                {
                    dataId: 222,
                    id: "08ae5f6e-006e-4130-8417-dfe8e24a916a",
                    name: "和田地区",
                    provinceId: "07996592-1ab7-4669-996d-4efc79d5340b"
                }
            ],
            id: "07996592-1ab7-4669-996d-4efc79d5340b",
            name: "新疆维吾尔自治区",
            pinyin: "XINJIANG"
        },
        {
            citys: [
                {
                    dataId: 208,
                    id: "9420aade-7fcb-47b3-bac1-ea204d253a40",
                    name: "北京市",
                    provinceId: "359418ff-6598-4a5a-900c-5d6ef2fb42e5"
                }
            ],
            id: "359418ff-6598-4a5a-900c-5d6ef2fb42e5",
            name: "北京市",
            pinyin: "BEIJING"
        },
        {
            citys: [
                {
                    dataId: 187,
                    id: "f1afba3d-170d-40b7-939c-e6687fc40ab3",
                    name: "汕尾市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 188,
                    id: "6f737af5-7142-4e7f-a734-f0272c881c4e",
                    name: "中山市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 189,
                    id: "e47a0e01-778e-4184-9f1c-ecd0604e1e99",
                    name: "韶关市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 190,
                    id: "5cb06346-4b4b-49ff-8d49-df753ed10a22",
                    name: "东莞市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 191,
                    id: "9ea06802-3ef6-411b-8af4-fdb1281335bf",
                    name: "江门市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 192,
                    id: "a9df690b-4c9c-44bb-b60e-c531117dd43d",
                    name: "茂名市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 193,
                    id: "c85c178d-1874-486a-89bb-c5aa4d3cd3d9",
                    name: "佛山市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 194,
                    id: "99217488-d2d0-4d10-a9c5-cb2108a6daa5",
                    name: "广州市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 195,
                    id: "bb917ed7-331e-4837-94bb-c8edeb61321a",
                    name: "珠海市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 196,
                    id: "feed34bd-0081-4161-a6de-9ff498c1a310",
                    name: "湛江市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 197,
                    id: "c42324d7-0ccc-4929-8a3f-900b699be790",
                    name: "深圳市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 198,
                    id: "106a7194-3489-4a8f-92f8-0ff5ebbcffb8",
                    name: "云浮市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 199,
                    id: "f82a2227-20b4-4ca2-a78d-2c74ce1a76b4",
                    name: "河源市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 200,
                    id: "b7fc9f77-89a8-426b-a7a3-2d7116a5a452",
                    name: "惠州市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 201,
                    id: "82636d8e-2820-4fb3-b57b-4b2d11780801",
                    name: "阳江市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 202,
                    id: "9c2c6967-8f28-4f78-bc84-41523e931833",
                    name: "汕头市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 203,
                    id: "a88a13bd-0d47-4623-bc6a-3d0416790838",
                    name: "揭阳市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 204,
                    id: "c7b2883b-ec94-4360-b1bc-37b6f83254ef",
                    name: "清远市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 205,
                    id: "a0b51a42-4f66-4ec3-a65e-51d61a89b4b8",
                    name: "潮州市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 206,
                    id: "bdba0f6f-35cf-456e-808c-567b53be0ba6",
                    name: "肇庆市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                },
                {
                    dataId: 207,
                    id: "21c8e3c8-3a2b-4194-b4a4-68be293aa6ad",
                    name: "梅州市",
                    provinceId: "0aa32b24-b795-49d8-b37b-619c8335343a"
                }
            ],
            id: "0aa32b24-b795-49d8-b37b-619c8335343a",
            name: "广东省",
            pinyin: "GUANGDONG"
        },
        {
            citys: [
                {
                    dataId: 180,
                    id: "68771343-b675-4224-b6b3-599045ae279b",
                    name: "昌都地区",
                    provinceId: "76b136e0-c072-4d6b-9049-6a0070f7f27f"
                },
                {
                    dataId: 181,
                    id: "4745936a-32b9-4db4-9909-5b71b6c2998b",
                    name: "那曲地区",
                    provinceId: "76b136e0-c072-4d6b-9049-6a0070f7f27f"
                },
                {
                    dataId: 182,
                    id: "6ebb88b4-711b-4641-ae75-0448a55cb91d",
                    name: "林芝地区",
                    provinceId: "76b136e0-c072-4d6b-9049-6a0070f7f27f"
                },
                {
                    dataId: 183,
                    id: "a2b82a3c-0f51-49d3-ba50-cd2e5745168f",
                    name: "阿里地区",
                    provinceId: "76b136e0-c072-4d6b-9049-6a0070f7f27f"
                },
                {
                    dataId: 184,
                    id: "1118df59-f071-4ac9-b072-db053b509ee1",
                    name: "日喀则地区",
                    provinceId: "76b136e0-c072-4d6b-9049-6a0070f7f27f"
                },
                {
                    dataId: 185,
                    id: "de67eb5f-592f-4887-a796-b8260b714b69",
                    name: "拉萨市",
                    provinceId: "76b136e0-c072-4d6b-9049-6a0070f7f27f"
                },
                {
                    dataId: 186,
                    id: "b3afcc88-7eb6-4631-b0f9-ab62da1d81b6",
                    name: "山南地区",
                    provinceId: "76b136e0-c072-4d6b-9049-6a0070f7f27f"
                }
            ],
            id: "76b136e0-c072-4d6b-9049-6a0070f7f27f",
            name: "西藏自治区",
            pinyin: "XIZANG"
        },
        {
            citys: [
                {
                    dataId: 162,
                    id: "631afada-1f81-4af4-b6fd-b45af91145d3",
                    name: "诸城市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 163,
                    id: "e9f524ef-040e-4c38-aace-af5817737913",
                    name: "聊城市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 164,
                    id: "50f0a005-db7e-40a5-a92d-d50076cd14ad",
                    name: "济宁市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 165,
                    id: "1dc771c9-c07c-450f-b932-843ef0dd0c16",
                    name: "临沂市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 166,
                    id: "dc2c5dec-fca0-4e10-ad9d-88b2e70f9e0b",
                    name: "威海市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 167,
                    id: "9ba4d576-ffb8-482b-8036-9a091606076d",
                    name: "德州市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 168,
                    id: "52a71753-7068-401c-a332-97d3284e1a70",
                    name: "东营市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 169,
                    id: "8071d483-4845-474f-ba0f-703885dc0886",
                    name: "济南市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 170,
                    id: "f50dab6d-c95b-4b3c-87b4-0571f02b80e2",
                    name: "潍坊市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 171,
                    id: "eba6bee6-5fe5-4a0d-bde8-0f373cea9ccd",
                    name: "烟台市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 172,
                    id: "c5155eed-38cb-4acb-a503-1371ad8a1739",
                    name: "荷泽市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 173,
                    id: "09013e76-4561-4de5-b431-5e1cf75228a0",
                    name: "枣庄市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 174,
                    id: "78956740-b4f1-4120-aabb-39f6abb0f0f7",
                    name: "淄博市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 175,
                    id: "8e211b85-20ec-47dd-9776-36919a586c20",
                    name: "滨州市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 176,
                    id: "0deae1d7-d490-4cf7-a5c4-fe39e5823584",
                    name: "日照市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 177,
                    id: "bcaa135c-d1ad-415d-8d43-e6fed4ec545e",
                    name: "青岛市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 178,
                    id: "261cf8a2-9cbf-4cf5-875c-e101e60d99ed",
                    name: "泰安市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                },
                {
                    dataId: 179,
                    id: "89c30809-c6d3-49a0-9edb-ee9525fdc9ff",
                    name: "莱芜市",
                    provinceId: "422c27f5-518f-4621-a787-7425c5296d60"
                }
            ],
            id: "422c27f5-518f-4621-a787-7425c5296d60",
            name: "山东省",
            pinyin: "SHANGDONG"
        },
        {
            citys: [
                {
                    dataId: 151,
                    id: "9f7a8666-cbc7-491d-9155-e99af7f812ca",
                    name: "九江市",
                    provinceId: "33361fe8-7bf7-4697-a5a7-79d5a61fe269"
                },
                {
                    dataId: 152,
                    id: "94fc4746-af21-4099-b414-feec114b7dfb",
                    name: "鹰潭市",
                    provinceId: "33361fe8-7bf7-4697-a5a7-79d5a61fe269"
                },
                {
                    dataId: 153,
                    id: "738b9cd6-19af-4f85-a566-4b4ecf6a78b9",
                    name: "上饶市",
                    provinceId: "33361fe8-7bf7-4697-a5a7-79d5a61fe269"
                },
                {
                    dataId: 154,
                    id: "5c90ed55-a88b-4ce9-8709-50750346ba69",
                    name: "南昌市",
                    provinceId: "33361fe8-7bf7-4697-a5a7-79d5a61fe269"
                },
                {
                    dataId: 155,
                    id: "a4430752-1b2a-4410-9c3d-025b04deea4b",
                    name: "抚州市",
                    provinceId: "33361fe8-7bf7-4697-a5a7-79d5a61fe269"
                },
                {
                    dataId: 156,
                    id: "d911bb0e-f9ae-4494-910e-1c2c45e906f2",
                    name: "宜春市",
                    provinceId: "33361fe8-7bf7-4697-a5a7-79d5a61fe269"
                },
                {
                    dataId: 157,
                    id: "06d61439-88dc-4823-8778-6e78607f2692",
                    name: "吉安市",
                    provinceId: "33361fe8-7bf7-4697-a5a7-79d5a61fe269"
                },
                {
                    dataId: 158,
                    id: "9e8e439d-8b91-4cda-904b-68f2232e8d35",
                    name: "景德镇市",
                    provinceId: "33361fe8-7bf7-4697-a5a7-79d5a61fe269"
                },
                {
                    dataId: 159,
                    id: "6059a82d-7f9d-4863-b013-cfc723ef8411",
                    name: "赣州市",
                    provinceId: "33361fe8-7bf7-4697-a5a7-79d5a61fe269"
                },
                {
                    dataId: 160,
                    id: "ecbd783c-4a22-4270-a94d-d95fec7ebc8d",
                    name: "萍乡市",
                    provinceId: "33361fe8-7bf7-4697-a5a7-79d5a61fe269"
                },
                {
                    dataId: 161,
                    id: "64516a4d-864d-4075-b331-b036afe2084c",
                    name: "新余市",
                    provinceId: "33361fe8-7bf7-4697-a5a7-79d5a61fe269"
                }
            ],
            id: "33361fe8-7bf7-4697-a5a7-79d5a61fe269",
            name: "江西省",
            pinyin: "JIANGXI"
        },
        {
            citys: [
                {
                    dataId: 134,
                    id: "6bef71a6-b05e-42a4-aec3-bd3712ae117c",
                    name: "漯河市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 135,
                    id: "04c60821-4682-4d78-a290-da8a2c0acd9a",
                    name: "新乡市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 136,
                    id: "8075dd62-b2b8-4dc7-b2ac-ced0ee7d7618",
                    name: "许昌市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 137,
                    id: "5d1b9efb-c41a-4178-b693-7ab5889057ca",
                    name: "信阳市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 138,
                    id: "3c377d19-2eca-4be9-a1f1-77a8177090d0",
                    name: "安阳市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 139,
                    id: "4ab3f1d8-1aa5-491b-b5f2-93097858cbfb",
                    name: "洛阳市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 140,
                    id: "26fa03cc-20a7-4eec-b9b2-9b0509f7a0b7",
                    name: "三门峡市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 141,
                    id: "d9e45a5a-40eb-4f4b-a2b2-230612fbd559",
                    name: "平顶山市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 142,
                    id: "9fa69e67-59ed-420b-8532-243b6eab9dce",
                    name: "焦作市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 143,
                    id: "ee4776d0-2ac0-46f4-89ca-29e2aa73a16b",
                    name: "周口市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 144,
                    id: "ec8d15e5-43fb-412d-9074-1c06bf4110cc",
                    name: "濮阳市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 145,
                    id: "8d7a76b8-f490-48a1-a8ac-5258864ebe47",
                    name: "南阳市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 146,
                    id: "8be92b40-e74f-48ea-8161-5c3c70468ab7",
                    name: "驻马店市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 147,
                    id: "325ec6fe-92c2-488c-8194-35dd0d301491",
                    name: "郑州市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 148,
                    id: "6e2a045c-0033-4353-836e-363449127a42",
                    name: "鹤壁市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 149,
                    id: "6cfca218-3815-4d08-a36e-e61a663e13ed",
                    name: "开封市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                },
                {
                    dataId: 150,
                    id: "d6957be9-f7e0-46f4-9c68-e33185803898",
                    name: "商丘市",
                    provinceId: "d6044f33-a608-4838-b330-8872a2aca9e5"
                }
            ],
            id: "d6044f33-a608-4838-b330-8872a2aca9e5",
            name: "河南省",
            pinyin: "HENAN"
        },
        {
            citys: [
                {
                    dataId: 123,
                    id: "d6d2424e-a086-4e79-ba61-68dafaa1ea6d",
                    name: "沧州市",
                    provinceId: "cf7ab7e5-9f70-44a2-ad03-8a1d500b4541"
                },
                {
                    dataId: 124,
                    id: "db3c573e-db36-4513-b5ca-56fc3fbd0d7a",
                    name: "石家庄市",
                    provinceId: "cf7ab7e5-9f70-44a2-ad03-8a1d500b4541"
                },
                {
                    dataId: 125,
                    id: "e3ce1dfe-25ba-40d2-96eb-174916297f35",
                    name: "唐山市",
                    provinceId: "cf7ab7e5-9f70-44a2-ad03-8a1d500b4541"
                },
                {
                    dataId: 126,
                    id: "6fd237e0-3887-478f-952c-07d35fe8f07c",
                    name: "邢台市",
                    provinceId: "cf7ab7e5-9f70-44a2-ad03-8a1d500b4541"
                },
                {
                    dataId: 127,
                    id: "1e5586d9-dfe4-4848-bd05-201c2b2dbd91",
                    name: "邯郸市",
                    provinceId: "cf7ab7e5-9f70-44a2-ad03-8a1d500b4541"
                },
                {
                    dataId: 128,
                    id: "5bd6eccb-4dc9-4602-937a-a00d3d779df3",
                    name: "衡水市",
                    provinceId: "cf7ab7e5-9f70-44a2-ad03-8a1d500b4541"
                },
                {
                    dataId: 129,
                    id: "163540e0-190f-4b12-8f9a-9e4ea4dcfb81",
                    name: "承德市",
                    provinceId: "cf7ab7e5-9f70-44a2-ad03-8a1d500b4541"
                },
                {
                    dataId: 130,
                    id: "25b9e80d-fc8a-4cfb-b306-93b73768bb37",
                    name: "保定市",
                    provinceId: "cf7ab7e5-9f70-44a2-ad03-8a1d500b4541"
                },
                {
                    dataId: 131,
                    id: "aa4ea828-9694-4a0e-ada4-94278586204e",
                    name: "张家口市",
                    provinceId: "cf7ab7e5-9f70-44a2-ad03-8a1d500b4541"
                },
                {
                    dataId: 132,
                    id: "f0cba361-5604-418f-a388-c0aa5b04651f",
                    name: "秦皇岛市",
                    provinceId: "cf7ab7e5-9f70-44a2-ad03-8a1d500b4541"
                },
                {
                    dataId: 133,
                    id: "574a224c-5de1-4ccf-9064-ab339b00ddc0",
                    name: "廊坊市",
                    provinceId: "cf7ab7e5-9f70-44a2-ad03-8a1d500b4541"
                }
            ],
            id: "cf7ab7e5-9f70-44a2-ad03-8a1d500b4541",
            name: "河北省",
            pinyin: "HEBEI"
        },
        {
            citys: [

            ],
            id: "4a725e57-33e8-46ce-8a4a-8b7ad10f3a72",
            name: "台湾省",
            pinyin: "TAIWAN"
        },
        {
            citys: [
                {
                    dataId: 110,
                    id: "2629ca47-5db0-4549-9654-aa704d6a04b8",
                    name: "襄樊市",
                    provinceId: "c42a984d-fb78-4b5f-a31d-8f3a7ea6c829"
                },
                {
                    dataId: 111,
                    id: "0b8e8d8f-08d8-4fef-b226-c20823c16696",
                    name: "黄冈市",
                    provinceId: "c42a984d-fb78-4b5f-a31d-8f3a7ea6c829"
                },
                {
                    dataId: 112,
                    id: "f2da9bf7-27dc-4f84-a776-b99d2dad71f5",
                    name: "武汉市",
                    provinceId: "c42a984d-fb78-4b5f-a31d-8f3a7ea6c829"
                },
                {
                    dataId: 113,
                    id: "c1457a45-41e3-4ecc-a157-b7bd8bf4f4f4",
                    name: "随州市",
                    provinceId: "c42a984d-fb78-4b5f-a31d-8f3a7ea6c829"
                },
                {
                    dataId: 114,
                    id: "e9ca6cc6-31d9-44b6-bfb1-d000453992b3",
                    name: "孝感市",
                    provinceId: "c42a984d-fb78-4b5f-a31d-8f3a7ea6c829"
                },
                {
                    dataId: 115,
                    id: "82398c13-a372-437d-92ff-c4398bc4d27c",
                    name: "恩施土家族苗族自治州",
                    provinceId: "c42a984d-fb78-4b5f-a31d-8f3a7ea6c829"
                },
                {
                    dataId: 116,
                    id: "2083bd22-10ff-4b8f-93c5-cb41287130c3",
                    name: "鄂州市",
                    provinceId: "c42a984d-fb78-4b5f-a31d-8f3a7ea6c829"
                },
                {
                    dataId: 117,
                    id: "ea0913ed-50aa-448a-8370-9109c7351715",
                    name: "十堰市",
                    provinceId: "c42a984d-fb78-4b5f-a31d-8f3a7ea6c829"
                },
                {
                    dataId: 118,
                    id: "7beaee16-f71a-4b85-a9ea-7cc4a4e6d77c",
                    name: "荆门市",
                    provinceId: "c42a984d-fb78-4b5f-a31d-8f3a7ea6c829"
                },
                {
                    dataId: 119,
                    id: "803a43a3-cbe7-4f92-978a-115df72c0c15",
                    name: "黄石市",
                    provinceId: "c42a984d-fb78-4b5f-a31d-8f3a7ea6c829"
                },
                {
                    dataId: 120,
                    id: "788a3c5e-d63d-40c2-8d19-3fdb26514a16",
                    name: "宜昌市",
                    provinceId: "c42a984d-fb78-4b5f-a31d-8f3a7ea6c829"
                },
                {
                    dataId: 121,
                    id: "1df75cb6-88c5-4969-86b9-e94fb00b4995",
                    name: "荆州市",
                    provinceId: "c42a984d-fb78-4b5f-a31d-8f3a7ea6c829"
                },
                {
                    dataId: 122,
                    id: "6fdf8a3d-7f1b-442d-a66a-eae7e892e4e3",
                    name: "咸宁市",
                    provinceId: "c42a984d-fb78-4b5f-a31d-8f3a7ea6c829"
                }
            ],
            id: "c42a984d-fb78-4b5f-a31d-8f3a7ea6c829",
            name: "湖北省",
            pinyin: "HUBEI"
        },
        {
            citys: [
                {
                    dataId: 109,
                    id: "8b21688b-b79b-4bf7-be0f-6dc2c42d2a7d",
                    name: "重庆市",
                    provinceId: "27559624-3add-4f81-a899-8fa7d281a47f"
                }
            ],
            id: "27559624-3add-4f81-a899-8fa7d281a47f",
            name: "重庆市",
            pinyin: "CHONGQING"
        },
        {
            citys: [
                {
                    dataId: 97,
                    id: "a7fc0fa2-4982-47ca-8fee-6cc4cae22fe6",
                    name: "乌海市",
                    provinceId: "e68ffd4c-600a-477d-86f9-99b73e9c52f5"
                },
                {
                    dataId: 98,
                    id: "0d97a16b-4683-4f83-8beb-746497b51da4",
                    name: "乌兰察布市",
                    provinceId: "e68ffd4c-600a-477d-86f9-99b73e9c52f5"
                },
                {
                    dataId: 99,
                    id: "eb22903c-ca4e-42cb-8854-9c8e0bc1e8e7",
                    name: "呼和浩特市",
                    provinceId: "e68ffd4c-600a-477d-86f9-99b73e9c52f5"
                },
                {
                    dataId: 100,
                    id: "f311239c-790d-49fd-88ec-dac0f3acf762",
                    name: "鄂尔多斯市",
                    provinceId: "e68ffd4c-600a-477d-86f9-99b73e9c52f5"
                },
                {
                    dataId: 101,
                    id: "43028025-6c98-4edd-8385-b0604cb5e145",
                    name: "锡林郭勒盟",
                    provinceId: "e68ffd4c-600a-477d-86f9-99b73e9c52f5"
                },
                {
                    dataId: 102,
                    id: "596c467b-fdb7-40a0-b2c3-0cba73bea688",
                    name: "呼伦贝尔市",
                    provinceId: "e68ffd4c-600a-477d-86f9-99b73e9c52f5"
                },
                {
                    dataId: 103,
                    id: "d9f61d3d-f5d5-4679-9d13-093f2dd6fd47",
                    name: "巴彦淖尔市",
                    provinceId: "e68ffd4c-600a-477d-86f9-99b73e9c52f5"
                },
                {
                    dataId: 104,
                    id: "12cdebac-fb01-49dc-8ef8-03527bcd4fde",
                    name: "阿拉善盟",
                    provinceId: "e68ffd4c-600a-477d-86f9-99b73e9c52f5"
                },
                {
                    dataId: 105,
                    id: "41721a69-40bf-4f82-bb96-2dd3c03b9707",
                    name: "包头市",
                    provinceId: "e68ffd4c-600a-477d-86f9-99b73e9c52f5"
                },
                {
                    dataId: 106,
                    id: "e57e376c-8aa3-42cf-915e-3334497d4975",
                    name: "赤峰市",
                    provinceId: "e68ffd4c-600a-477d-86f9-99b73e9c52f5"
                },
                {
                    dataId: 107,
                    id: "eca70a5c-547d-41fd-8a22-e7cd2886b04b",
                    name: "通辽市",
                    provinceId: "e68ffd4c-600a-477d-86f9-99b73e9c52f5"
                },
                {
                    dataId: 108,
                    id: "05f3a1fb-263a-47b5-bc41-e7ea70919573",
                    name: "兴安盟",
                    provinceId: "e68ffd4c-600a-477d-86f9-99b73e9c52f5"
                }
            ],
            id: "e68ffd4c-600a-477d-86f9-99b73e9c52f5",
            name: "内蒙古自治区",
            pinyin: "NEIMENGGU"
        },
        {
            citys: [
                {
                    dataId: 96,
                    id: "7203523b-01b4-4052-82bb-775d5d04952f",
                    name: "天津市",
                    provinceId: "21af3a35-cb78-47b3-ac79-9b9bb3bacfff"
                }
            ],
            id: "21af3a35-cb78-47b3-ac79-9b9bb3bacfff",
            name: "天津市",
            pinyin: "TIANJIN"
        },
        {
            citys: [
                {
                    dataId: 82,
                    id: "3e972ebb-7340-42ff-b25a-7b3e1b38b280",
                    name: "酒泉市",
                    provinceId: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909"
                },
                {
                    dataId: 83,
                    id: "be57a30e-88e9-45d5-9f43-7fabf7b6615f",
                    name: "临夏回族自治州",
                    provinceId: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909"
                },
                {
                    dataId: 84,
                    id: "68e27db2-8928-46f1-b50b-6bbafcd5a41d",
                    name: "天水市",
                    provinceId: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909"
                },
                {
                    dataId: 85,
                    id: "0ac0c66b-3c57-4b35-b964-6e73c240c4b9",
                    name: "白银市",
                    provinceId: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909"
                },
                {
                    dataId: 86,
                    id: "792104f9-a26a-45b6-9405-93595f267d7e",
                    name: "定西市",
                    provinceId: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909"
                },
                {
                    dataId: 87,
                    id: "ab9a38b2-8537-437f-ba29-87a0baeeb64d",
                    name: "兰州市",
                    provinceId: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909"
                },
                {
                    dataId: 88,
                    id: "a615e89f-bab5-458e-a697-be2cec8f20c1",
                    name: "甘南藏族自治州",
                    provinceId: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909"
                },
                {
                    dataId: 89,
                    id: "5803e1a6-079b-424d-b930-c8f0e1f63738",
                    name: "张掖市",
                    provinceId: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909"
                },
                {
                    dataId: 90,
                    id: "4478ea57-28ea-47f7-a783-4ee899ee4283",
                    name: "陇南市",
                    provinceId: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909"
                },
                {
                    dataId: 91,
                    id: "eeeff971-9b59-4610-baab-557035c74623",
                    name: "嘉峪关市",
                    provinceId: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909"
                },
                {
                    dataId: 92,
                    id: "cf4bcf15-163b-4786-93b3-eb71b6591549",
                    name: "庆阳市",
                    provinceId: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909"
                },
                {
                    dataId: 93,
                    id: "7fcda938-803c-4528-9c6d-dfc1bd233689",
                    name: "武威市",
                    provinceId: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909"
                },
                {
                    dataId: 94,
                    id: "234b16ea-20f4-41ac-a1f9-e0ccee283ca7",
                    name: "金昌市",
                    provinceId: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909"
                },
                {
                    dataId: 95,
                    id: "68cc49c9-f2f1-43c2-812b-fb4702326c0b",
                    name: "平凉市",
                    provinceId: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909"
                }
            ],
            id: "7d7c42ad-7de5-4c18-813c-9c1d97c7c909",
            name: "甘肃省",
            pinyin: "GANSU"
        },
        {
            citys: [
                {
                    dataId: 65,
                    id: "23d6f24a-a0df-44e6-bde9-f923aa5bc907",
                    name: "铜陵市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 66,
                    id: "7e1bdb1f-bd6d-44d1-8ab7-f437242decfb",
                    name: "亳州市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 67,
                    id: "306da6ba-a233-4bb5-854d-e3350170275d",
                    name: "巢湖市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 68,
                    id: "9ddae24c-c6d8-4f13-ba69-31c32b50df43",
                    name: "黄山市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 69,
                    id: "c51d9ee4-2a92-410f-97ed-1027fb4cf7b5",
                    name: "安庆市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 70,
                    id: "4a864e7e-5fa4-48a1-b840-19707301197e",
                    name: "宿州市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 71,
                    id: "f63bf98c-1597-4fda-aaf4-171296d17866",
                    name: "六安市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 72,
                    id: "c9a3d30a-eaec-4184-977f-c6709a07ab8a",
                    name: "蚌埠市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 73,
                    id: "d4107a05-c17e-47c1-af35-c3eb19956306",
                    name: "合肥市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 74,
                    id: "fe74b0e9-ad83-4855-8583-c49193d04daa",
                    name: "池州市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 75,
                    id: "6e451140-b303-4aa1-a20b-d507c855cbd2",
                    name: "芜湖市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 76,
                    id: "86275ac2-cb68-4607-8f41-c09956c3bab6",
                    name: "宣城市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 77,
                    id: "bfe6feef-7b8c-4301-9810-b2ad8adb88d4",
                    name: "淮南市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 78,
                    id: "df8eacb2-78e6-4867-af8f-90671182a896",
                    name: "阜阳市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 79,
                    id: "f6a9689a-b970-4ae0-b1c7-a047a3ff33a1",
                    name: "滁州市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 80,
                    id: "9907d78b-7042-451e-9a1d-6e5639af1aa7",
                    name: "马鞍山市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                },
                {
                    dataId: 81,
                    id: "5e04f04a-a6df-4dcf-8e3b-5fd10442cb61",
                    name: "淮北市",
                    provinceId: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4"
                }
            ],
            id: "1a7ef8d4-b20d-41c2-b6f0-9f91bc9feaf4",
            name: "安徽省",
            pinyin: "ANHUI"
        },
        {
            citys: [
                {
                    dataId: 56,
                    id: "a3521055-25db-4106-8cb3-6ef1e3bde788",
                    name: "厦门市",
                    provinceId: "3a7270c6-bcda-4374-a931-c1850f977053"
                },
                {
                    dataId: 57,
                    id: "2feab6a4-25b6-43ee-b46f-77bca6152336",
                    name: "南平市",
                    provinceId: "3a7270c6-bcda-4374-a931-c1850f977053"
                },
                {
                    dataId: 58,
                    id: "b1e7c5e9-a8bc-4145-b426-ad2e3703d73f",
                    name: "三明市",
                    provinceId: "3a7270c6-bcda-4374-a931-c1850f977053"
                },
                {
                    dataId: 59,
                    id: "75e8a1c2-8835-4642-bfb8-d7e58351409a",
                    name: "宁德市",
                    provinceId: "3a7270c6-bcda-4374-a931-c1850f977053"
                },
                {
                    dataId: 60,
                    id: "18b1ccf4-f2b0-4b91-aab9-4f6d2b081a08",
                    name: "莆田市",
                    provinceId: "3a7270c6-bcda-4374-a931-c1850f977053"
                },
                {
                    dataId: 61,
                    id: "869d2a60-ca89-43d7-84b6-5514b0f02f66",
                    name: "福州市",
                    provinceId: "3a7270c6-bcda-4374-a931-c1850f977053"
                },
                {
                    dataId: 62,
                    id: "e480f44e-9692-4a11-b9b8-5f4cbc21682b",
                    name: "漳州市",
                    provinceId: "3a7270c6-bcda-4374-a931-c1850f977053"
                },
                {
                    dataId: 63,
                    id: "d6ebb4b5-1cb4-4271-b666-f52c1e3383f0",
                    name: "龙岩市",
                    provinceId: "3a7270c6-bcda-4374-a931-c1850f977053"
                },
                {
                    dataId: 64,
                    id: "995084b3-5206-4c09-a9ee-f7cfcb43f9c2",
                    name: "泉州市",
                    provinceId: "3a7270c6-bcda-4374-a931-c1850f977053"
                }
            ],
            id: "3a7270c6-bcda-4374-a931-c1850f977053",
            name: "福建省",
            pinyin: "FUJIAN"
        },
        {
            citys: [
                {
                    dataId: 26,
                    id: "7cca8dc8-be02-4f7e-84a2-fdf9e7988e32",
                    name: "广安市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 27,
                    id: "26b77110-4feb-4172-b9fe-f39c66410547",
                    name: "阿坝藏族羌族自治州",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 28,
                    id: "6f0ce905-93a1-4fbd-8e7c-503896d3b882",
                    name: "广元市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 29,
                    id: "37048ec1-dc9f-4323-9a7d-505e2ed35b4f",
                    name: "遂宁市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 30,
                    id: "c174bb33-a116-4c36-945c-55922b1b8a8f",
                    name: "乐山市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 31,
                    id: "ac9c9bf5-b8bd-429f-a3c2-4934413e2ae3",
                    name: "凉山彝族自治州",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 32,
                    id: "bda897ba-01e2-474e-b5cb-49f678a8cb86",
                    name: "泸州市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 33,
                    id: "43a371ca-0ec6-405d-b590-472dee86b150",
                    name: "南充市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 34,
                    id: "a0cfdf55-4393-467c-bb7c-0ba97f5bd7af",
                    name: "内江市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 35,
                    id: "7eb8fa5e-ccae-45a6-b341-027c6b9fa469",
                    name: "宜宾市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 36,
                    id: "67cef868-7299-407f-9e38-1df737c5ad61",
                    name: "资阳市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 37,
                    id: "66710c65-0bdf-4840-b055-267a3592233d",
                    name: "巴中市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 38,
                    id: "b082e7eb-6d93-4de5-ba66-2904f14fe8fd",
                    name: "攀枝花市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 39,
                    id: "ecd6ec22-b762-4464-a04c-de4171ad595d",
                    name: "自贡市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 40,
                    id: "0562106a-4304-45e7-84af-ba6fd8fa8fc6",
                    name: "雅安市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 41,
                    id: "e09d55e2-02d9-4603-b9a8-c1c1627aa871",
                    name: "眉山市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 42,
                    id: "fbca6643-a831-4a86-aa6d-b48f34734383",
                    name: "绵阳市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 42,
                    id: "bb79feeb-04f0-4843-ae2f-73e23db2a4d2",
                    name: "德阳市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 44,
                    id: "2cf23cca-a7b9-4826-a8ef-6dd900ffae3b",
                    name: "成都市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 45,
                    id: "d49eba1b-eab0-4322-a8aa-8b16f7466c63",
                    name: "甘孜藏族自治州",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                },
                {
                    dataId: 46,
                    id: "e4894567-4364-40ad-afed-85e04f156f8d",
                    name: "达州市",
                    provinceId: "d2237310-ad42-49f9-bd20-c4705ee8c260"
                }
            ],
            id: "d2237310-ad42-49f9-bd20-c4705ee8c260",
            name: "四川省",
            pinyin: "SICHUAN"
        },
        {
            citys: [
                {
                    dataId: 13,
                    id: "950c8ea4-103e-48c3-834b-88e3c2abc402",
                    name: "无锡市",
                    provinceId: "c11221f4-59a9-4b51-97a7-ca30bcfa9b16"
                },
                {
                    dataId: 14,
                    id: "c63f0ef9-0c98-45a0-8cb1-b5c36bc96b83",
                    name: "常州市",
                    provinceId: "c11221f4-59a9-4b51-97a7-ca30bcfa9b16"
                },
                {
                    dataId: 15,
                    id: "551c7d77-ebfc-47cd-bcfa-bc888187a82d",
                    name: "盐城市",
                    provinceId: "c11221f4-59a9-4b51-97a7-ca30bcfa9b16"
                },
                {
                    dataId: 16,
                    id: "32ed1176-5960-4749-a034-d07dbe314ca6",
                    name: "苏州市",
                    provinceId: "c11221f4-59a9-4b51-97a7-ca30bcfa9b16"
                },
                {
                    dataId: 17,
                    id: "224d3443-baea-4965-bbec-d0b4bc0b0a8d",
                    name: "宿迁市",
                    provinceId: "c11221f4-59a9-4b51-97a7-ca30bcfa9b16"
                },
                {
                    dataId: 18,
                    id: "74c98897-6588-4e2b-9edf-1de7aa18bef9",
                    name: "徐州市",
                    provinceId: "c11221f4-59a9-4b51-97a7-ca30bcfa9b16"
                },
                {
                    dataId: 19,
                    id: "cc861651-6672-49d4-945e-347931a744f1",
                    name: "淮安市",
                    provinceId: "c11221f4-59a9-4b51-97a7-ca30bcfa9b16"
                },
                {
                    dataId: 20,
                    id: "2f50ff12-6a10-4b8c-9d6a-167240c8e4d3",
                    name: "连云港市",
                    provinceId: "c11221f4-59a9-4b51-97a7-ca30bcfa9b16"
                },
                {
                    dataId: 21,
                    id: "6f14e5e3-bcf1-4e56-b844-51f83f90b7b7",
                    name: "南京市",
                    provinceId: "c11221f4-59a9-4b51-97a7-ca30bcfa9b16"
                },
                {
                    dataId: 22,
                    id: "74cfa48a-8fc2-47c0-a443-5222c832000c",
                    name: "镇江市",
                    provinceId: "c11221f4-59a9-4b51-97a7-ca30bcfa9b16"
                },
                {
                    dataId: 23,
                    id: "8406cf80-f252-4bf8-9e71-64af14ee2bae",
                    name: "南通市",
                    provinceId: "c11221f4-59a9-4b51-97a7-ca30bcfa9b16"
                },
                {
                    dataId: 24,
                    id: "6f15ab2f-4132-4a31-9e95-ee7920d39290",
                    name: "扬州市",
                    provinceId: "c11221f4-59a9-4b51-97a7-ca30bcfa9b16"
                },
                {
                    dataId: 25,
                    id: "18f38636-c894-44cb-97c8-e45142993b0a",
                    name: "泰州市",
                    provinceId: "c11221f4-59a9-4b51-97a7-ca30bcfa9b16"
                }
            ],
            id: "c11221f4-59a9-4b51-97a7-ca30bcfa9b16",
            name: "江苏省",
            pinyin: "JIANGSU"
        },
        {
            citys: [
                {
                    dataId: 47,
                    id: "dc1f42ce-1740-417d-92d8-e4d7e82919d2",
                    name: "吉林市",
                    provinceId: "7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b"
                },
                {
                    dataId: 48,
                    id: "74e886bb-ec2d-47cd-8596-5e2b9a41607a",
                    name: "松原市",
                    provinceId: "7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b"
                },
                {
                    dataId: 49,
                    id: "0b8e19df-3f55-4b22-9c93-5c471239f7d0",
                    name: "四平市",
                    provinceId: "7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b"
                },
                {
                    dataId: 50,
                    id: "00d4a630-f0ed-4f6b-a03e-492af4e16ef5",
                    name: "延边朝鲜族自治州",
                    provinceId: "7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b"
                },
                {
                    dataId: 51,
                    id: "844dc883-0d02-4acc-b44c-4ef8c441ff17",
                    name: "长春市",
                    provinceId: "7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b"
                },
                {
                    dataId: 52,
                    id: "f00ad8a7-be37-483d-b665-373c8c030d33",
                    name: "白城市",
                    provinceId: "7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b"
                },
                {
                    dataId: 53,
                    id: "381cc1d0-0bdf-4992-af36-0ad7dab609bc",
                    name: "白山市",
                    provinceId: "7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b"
                },
                {
                    dataId: 54,
                    id: "e8699bfb-8ad9-42a0-b3e7-2b0f97e2598c",
                    name: "辽源市",
                    provinceId: "7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b"
                },
                {
                    dataId: 55,
                    id: "cd711677-4415-4c98-b925-95393c2bf436",
                    name: "通化市",
                    provinceId: "7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b"
                }
            ],
            id: "7ffa40e4-fdbf-43ac-84f1-cb07ae38f43b",
            name: "吉林省",
            pinyin: "JILIN"
        },
        {
            citys: [
                {
                    dataId: 342,
                    id: "b7a67c05-0447-459e-ba0b-83bc1c1dd786",
                    name: "本溪市",
                    provinceId: "ecb21b7a-4dae-4af9-b9af-d54259223821"
                },
                {
                    dataId: 343,
                    id: "3ed6a8d1-9052-4502-9cbb-d8463593fb4e",
                    name: "丹东市",
                    provinceId: "ecb21b7a-4dae-4af9-b9af-d54259223821"
                },
                {
                    dataId: 344,
                    id: "93170404-dcc4-4321-9275-bc973484a7f7",
                    name: "大连市",
                    provinceId: "ecb21b7a-4dae-4af9-b9af-d54259223821"
                },
                {
                    dataId: 345,
                    id: "9deb1a40-5240-43f0-b588-ac62c4a7df00",
                    name: "阜新市",
                    provinceId: "ecb21b7a-4dae-4af9-b9af-d54259223821"
                },
                {
                    dataId: 346,
                    id: "f2aa8698-9333-4c82-b9da-2f9d5e63d92e",
                    name: "抚顺市",
                    provinceId: "ecb21b7a-4dae-4af9-b9af-d54259223821"
                },
                {
                    dataId: 347,
                    id: "b4fe6a75-0689-4c21-aa42-3134b2010e99",
                    name: "铁岭市",
                    provinceId: "ecb21b7a-4dae-4af9-b9af-d54259223821"
                },
                {
                    dataId: 348,
                    id: "ba82f6f7-294f-4b31-8e48-018c663e851f",
                    name: "锦州市",
                    provinceId: "ecb21b7a-4dae-4af9-b9af-d54259223821"
                },
                {
                    dataId: 349,
                    id: "04061f5a-3190-4b61-bdc6-12c77d276b89",
                    name: "沈阳市",
                    provinceId: "ecb21b7a-4dae-4af9-b9af-d54259223821"
                },
                {
                    dataId: 350,
                    id: "9f8a938a-aee1-4c0f-ba37-37b378fce03a",
                    name: "葫芦岛市",
                    provinceId: "ecb21b7a-4dae-4af9-b9af-d54259223821"
                },
                {
                    dataId: 351,
                    id: "72fb1f97-c187-49fa-9c5d-3f24cc61c299",
                    name: "鞍山市",
                    provinceId: "ecb21b7a-4dae-4af9-b9af-d54259223821"
                },
                {
                    dataId: 352,
                    id: "03b873a1-a8c8-4c87-add7-5667952c7a0a",
                    name: "朝阳市",
                    provinceId: "ecb21b7a-4dae-4af9-b9af-d54259223821"
                },
                {
                    dataId: 353,
                    id: "02b5dfeb-8e1d-4786-9969-e3a5564816f0",
                    name: "盘锦市",
                    provinceId: "ecb21b7a-4dae-4af9-b9af-d54259223821"
                },
                {
                    dataId: 354,
                    id: "697cceab-09d6-4ee9-bbbf-ea8f14365b54",
                    name: "辽阳市",
                    provinceId: "ecb21b7a-4dae-4af9-b9af-d54259223821"
                },
                {
                    dataId: 355,
                    id: "b5d085d6-cf5f-4067-a4af-fbffe4ad3074",
                    name: "营口市",
                    provinceId: "ecb21b7a-4dae-4af9-b9af-d54259223821"
                }
            ],
            id: "ecb21b7a-4dae-4af9-b9af-d54259223821",
            name: "辽宁省",
            pinyin: "LIAONING"
        },
        {
            citys: [
                {
                    dataId: 331,
                    id: "afada3a8-67b3-416d-9d64-57f00b9d3512",
                    name: "阳泉市",
                    provinceId: "f8941f33-06e1-4edc-bf2d-d96daf10efc1"
                },
                {
                    dataId: 332,
                    id: "c9dd0c1f-8dc2-4fe0-b9c6-5f8717ef8066",
                    name: "晋城市",
                    provinceId: "f8941f33-06e1-4edc-bf2d-d96daf10efc1"
                },
                {
                    dataId: 333,
                    id: "6788ef60-1076-423c-9090-3f874f856fb8",
                    name: "晋中市",
                    provinceId: "f8941f33-06e1-4edc-bf2d-d96daf10efc1"
                },
                {
                    dataId: 334,
                    id: "143f8bf0-82e1-4768-89fd-3ffa103cfb74",
                    name: "太原市",
                    provinceId: "f8941f33-06e1-4edc-bf2d-d96daf10efc1"
                },
                {
                    dataId: 335,
                    id: "7c1ce91d-566f-4942-bbf8-123622542150",
                    name: "大同市",
                    provinceId: "f8941f33-06e1-4edc-bf2d-d96daf10efc1"
                },
                {
                    dataId: 336,
                    id: "ed6af995-d759-44f4-b5db-1e678b01f5bb",
                    name: "忻州市",
                    provinceId: "f8941f33-06e1-4edc-bf2d-d96daf10efc1"
                },
                {
                    dataId: 337,
                    id: "437237fb-73ad-4d92-b385-20c19c25ba33",
                    name: "吕梁市",
                    provinceId: "f8941f33-06e1-4edc-bf2d-d96daf10efc1"
                },
                {
                    dataId: 338,
                    id: "bcc48e96-12b1-4d19-850b-c155d3407b4d",
                    name: "长治市",
                    provinceId: "f8941f33-06e1-4edc-bf2d-d96daf10efc1"
                },
                {
                    dataId: 339,
                    id: "0ccc7d65-da6e-41da-bbd9-69ce8cedebdc",
                    name: "临汾市",
                    provinceId: "f8941f33-06e1-4edc-bf2d-d96daf10efc1"
                },
                {
                    dataId: 340,
                    id: "403c0130-b016-4ea5-acc7-9a5a68a31653",
                    name: "运城市",
                    provinceId: "f8941f33-06e1-4edc-bf2d-d96daf10efc1"
                },
                {
                    dataId: 341,
                    id: "666d89b3-9f6d-4fb4-9baf-8a893998e7c9",
                    name: "朔州市",
                    provinceId: "f8941f33-06e1-4edc-bf2d-d96daf10efc1"
                }
            ],
            id: "f8941f33-06e1-4edc-bf2d-d96daf10efc1",
            name: "山西省",
            pinyin: "SHANXI"
        },
        {
            citys: [
                {
                    dataId: 317,
                    id: "0ef9d878-f247-495d-b157-8b58b80e56af",
                    name: "株洲市",
                    provinceId: "360c371c-c675-4957-827e-e0a74344459f"
                },
                {
                    dataId: 318,
                    id: "1a8de372-716b-4d83-b065-9138b22f1798",
                    name: "张家界市",
                    provinceId: "360c371c-c675-4957-827e-e0a74344459f"
                },
                {
                    dataId: 319,
                    id: "3908d33d-49d5-4b0d-9662-6db67069625b",
                    name: "湘西土家族苗族自治州",
                    provinceId: "360c371c-c675-4957-827e-e0a74344459f"
                },
                {
                    dataId: 320,
                    id: "4bee87dd-4a0c-4253-86e0-c0b42e5fb7fe",
                    name: "益阳市",
                    provinceId: "360c371c-c675-4957-827e-e0a74344459f"
                },
                {
                    dataId: 321,
                    id: "f86fc5c4-839c-4b55-8d21-ae72e932fbbe",
                    name: "怀化市",
                    provinceId: "360c371c-c675-4957-827e-e0a74344459f"
                },
                {
                    dataId: 322,
                    id: "0c7ab447-6b19-4b83-9af2-22959dcaa0f2",
                    name: "郴州市",
                    provinceId: "360c371c-c675-4957-827e-e0a74344459f"
                },
                {
                    dataId: 323,
                    id: "e67edccb-baef-49d3-8aaf-29065726afcd",
                    name: "娄底市",
                    provinceId: "360c371c-c675-4957-827e-e0a74344459f"
                },
                {
                    dataId: 324,
                    id: "a88d1e25-1403-453a-b33d-247c7775b067",
                    name: "邵阳市",
                    provinceId: "360c371c-c675-4957-827e-e0a74344459f"
                },
                {
                    dataId: 325,
                    id: "f5d9dd69-bad2-47ee-bd7c-31c6dcddc9e8",
                    name: "衡阳市",
                    provinceId: "360c371c-c675-4957-827e-e0a74344459f"
                },
                {
                    dataId: 326,
                    id: "cafda78f-f7b9-4049-a1c0-2f1a23037998",
                    name: "常德市",
                    provinceId: "360c371c-c675-4957-827e-e0a74344459f"
                },
                {
                    dataId: 327,
                    id: "e0bedbbe-47ee-486a-8b66-1287b93d0a2b",
                    name: "湘潭市",
                    provinceId: "360c371c-c675-4957-827e-e0a74344459f"
                },
                {
                    dataId: 328,
                    id: "2f1747e4-f079-4aed-87f2-3fcfe47f901a",
                    name: "永州市",
                    provinceId: "360c371c-c675-4957-827e-e0a74344459f"
                },
                {
                    dataId: 329,
                    id: "2057b61e-6726-4544-99de-454be56ad9e8",
                    name: "长沙市",
                    provinceId: "360c371c-c675-4957-827e-e0a74344459f"
                },
                {
                    dataId: 330,
                    id: "29de749c-e03d-4530-8fd3-5d82fb936e94",
                    name: "岳阳市",
                    provinceId: "360c371c-c675-4957-827e-e0a74344459f"
                }
            ],
            id: "360c371c-c675-4957-827e-e0a74344459f",
            name: "湖南省",
            pinyin: "HUNAN"
        }];
//元素相对于页面的left
function getElementLeft(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;

    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }

    return actualLeft;
}

//元素相对于页面的top
function getElementTop(element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;

    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }

    return actualTop;
}

//获取元素相对于视口的位置
function getBoundingClientRect(element) {

    var scrollTop = document.documentElement.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft;

    if(element.getBoundingClientRect) {
        if(typeof arguments.callee.offsetW != "number") {
            var temp = document.createElement("div");
            temp.style.cssText = "position: absolute; left: 0; top: 0;";
            document.body.appendChild(temp);
            arguments.callee.offsetH = -temp.getBoundingClientRect().top;
            arguments.callee.offsetW = -temp.getBoundingClientRect().left;
            document.body.removeChild(temp);
            temp = null;

            var rect = element.getBoundingClientRect();
            var offsetW = arguments.callee.offsetW;
            var offsetH = arguments.callee.offsetH;

            return {
                left: rect.left + offsetW,
                right: rect.right + offsetW,
                top: rect.top + offsetH,
                bottom: rect.bottom + offsetH
            }
        } else {//兼容不支持getBoundingClientRect的浏览器
            var actualLeft = getElementLeft(element);
            var actualTop = getElementTop(element);

            return {
                left: actualLeft - scrollLeft,
                right: actualLeft + element.offsetWidth - scrollLeft,
                top: actualTop - scrollTop,
                bottom: actualTop + element.offsetHeight - scrollTop
            }
        }
    }
}

function initMyCountInputGroup() {
    var objMyCountInputGroup = $(".my-count-input-group");
    var length = objMyCountInputGroup.length;
    var i;
    for (i = 0; i < length; i++) {
        //按钮响应
        var objSubBtn = $($(objMyCountInputGroup[i]).find("img")[0]);
        var objAddBtn = $($(objMyCountInputGroup[i]).find("img")[1]);

        objSubBtn.click(function () {
            var objInput = $(this).parents(".my-count-input-group").find("div input");
            //获取当前Input中的值
            var amount = objInput.val();
            if (amount > 1) {//如果大于1则减1
                amount--;
            }
            //将相关的input值重置为修改后的值
            objInput.val(amount);
        });
        objAddBtn.click(function () {
            var objInput = $(this).parents(".my-count-input-group").find("div input");
            //获取当前Input中的值
            var amount = objInput.val();
            amount++;        
            //将相关的input值重置为修改后的值
            objInput.val(amount);
        });
    }

    //input输入过滤
    var objMyCountInput = objMyCountInputGroup.find("div input");
    objMyCountInput.keypress(function (e) {
        var charCode;
        
        if (typeof e.charCode == "number") {
            charCode = e.charCode;
        } else {
            charCode = e.keyCode;
        }

        var char = String.fromCharCode(charCode);

        if (!/\d/.test(char)) {
            e.preventDefault();
        }
    });

    objMyCountInput.keyup(function (e) {
        var inputVal = $(this).val();
        if (inputVal.slice(0, 1) == 0)
        {
            inputVal = 1;
        }
        $(this).val(inputVal);
    });
}

function setAnimateForShopProductSign(objJoinBtn/*js 元素*/) {
    //根据当前传入的按钮位置 设置商品标志的位置
    var boundingRect = objJoinBtn.getBoundingClientRect();
    var top = boundingRect.top;
    var right = boundingRect.right;
    var left = boundingRect.left;

    var shopProductSign = $('<img src="/Icon/Main/礼品.png" class="shop-product-sign" />');
    shopProductSign.css("top", top + "px").css("left", (right + left) / 2 + "px");
    $("body").append(shopProductSign);
 
    var objtarget = document.querySelector(".user-info-icon");
    var boundingRectTarget = objtarget.getBoundingClientRect();
    var targetTop = boundingRectTarget.top;
    var targetCLeft = (boundingRectTarget.left + boundingRectTarget.right) / 2;

    shopProductSign.animate({
            top: targetTop + "px",
            left: targetCLeft + "px"
        },
        {
            easing: "easeInQuad",
            duration: 1000,
            complete: function () {
                $(this).remove();
            }
        });
}

//根据图片的尺寸设置图片的位置
function setHAndWBaseOnSize(objImg) {
    //根据图片的宽高比例设置属性
    var height = objImg.height();
    var width = objImg.width();
    if (width > height) {
        objImg.css("height", "100%");
        objImg.css("width", "auto");
    } else {
        objImg.css("width", "100%");
        objImg.css("height", "auto");
    }
}

//指定图片是否加载完毕 第一个参数为指定图片jq对象 后续为待执行的函数
function isTheImgReady(objImg, callback) {
    //判断图片是否加载完成
    if (objImg[0].complete) {//如果完成了
        callback(objImg);
    } else {//如果未完成
        setTimeout(function () {//继续判断
            isTheImgReady(objImg, callback)
        }, 500);
    }
}

function isImgRead(callback) {
    isLoad = false;
    var allComplete = true;
    $(".product-img-wrap img").each(function () {
        if (!this.complete) {
            allComplete = false;
        }
    });

    if (allComplete) {
        isLoad = true;
    }

    if (!isLoad) {//未完毕
        setTimeout(function () {
            isImgRead(callback);
        }, 500);
    } else {
         if (typeof callback == 'string') {
             eval(callback);
        }
        else {     
             callback();
        }
    }
}

//根据选择器判断图片是否加载完毕
function isImgReadBySelector(selector, callback) {
    isLoad = false;
    var allComplete = true;
    $(selector).each(function () {
        if (!this.complete) {
            allComplete = false;
        }
    });

    if (allComplete) {
        isLoad = true;
    }

    if (!isLoad) {//未完毕
        setTimeout(function () {
            isImgReadBySelector(selector, callback);
        }, 500);
    } else {
        if (typeof callback == 'string') {
            eval(callback);
        }
        else {          
            callback();
        }
    }
}

//保留两位小数
function getFloatToFixedTwo(price) {
    return price.toFixed(2);
}

/*魄罗载入*/
    /*加载动画块HTMLCode：
    <div id="" class="load-aminate">
        <div class="load-aminate-item load-aminate-item-one"><img src="~/Image/NavView/load.png"></div>
        <div class="load-aminate-item load-aminate-item-two"><img src="~/Image/NavView/load.png"></div>
        <div class="load-aminate-item load-aminate-item-three"><img src="~/Image/NavView/load.png"></div>
        <div class="load-aminate-item load-aminate-item-four"><img src="~/Image/NavView/load.png"></div>
    </div>*/

    //载入动画
    function moveToUpAndDown() {
        $(".load-aminate").animate({
            top: "-=40%",
        },
        {
            easing: "easeOutQuad",
            duration: 1000,
            complete: function () {
                $(".load-aminate").animate({
                    top: "+=40%",
                },
                {
                    easing: "easeInQuad",
                    duration: 1000,
                    complete: function () {

                    }
                });
            }
        });
    }

    //根据选择器和百分比设置起跳高度
    function moveToUpAndDownBySeletor(seletor, perHeight, timeSpan) {
        $(seletor + " img").animate({
            bottom: "+=" + perHeight + "%",
        },
        {
            easing: "easeOutQuad",
            duration: timeSpan/2,
            complete: function () {
                $(seletor + " img").animate({
                    bottom: "-=" + perHeight + "%",
                },
                {
                    easing: "easeInQuad",
                    duration: timeSpan/2,
                    complete: function () {

                    }
                });
            }
        });
    }

    //根据ID初始化载入动画：通过ID找到加载块 并对每个组进行动画启动 和高度设置
    function initMoveToUpAndDownByID(idName, perHeight, timeSpan) {
        moveToUpAndDownBySeletor("#" + idName + " .load-aminate-item-one", perHeight, timeSpan);
        timer = setInterval('moveToUpAndDownBySeletor("#' + idName + ' .load-aminate-item-one", ' + perHeight + ', ' + timeSpan + ')', timeSpan);
        setTimeout(function () {
            moveToUpAndDownBySeletor("#" + idName + " .load-aminate-item-two", perHeight, timeSpan);
            timer = setInterval('moveToUpAndDownBySeletor("#' + idName + ' .load-aminate-item-two", ' + perHeight + ', ' + timeSpan + ')', timeSpan);
            setTimeout(function () {
                moveToUpAndDownBySeletor("#" + idName + " .load-aminate-item-three", perHeight, timeSpan);
                timer = setInterval('moveToUpAndDownBySeletor("#' + idName + ' .load-aminate-item-three", ' + perHeight + ', ' + timeSpan + ')', timeSpan);
                setTimeout(function () {
                    moveToUpAndDownBySeletor("#" + idName + " .load-aminate-item-four", perHeight, timeSpan);
                    timer = setInterval('moveToUpAndDownBySeletor("#' + idName + ' .load-aminate-item-four", ' + perHeight + ', ' + timeSpan + ')', timeSpan);
                }, timeSpan / 4 * 3);
            }, timeSpan / 2);
        }, timeSpan / 4);
    }

    //初始化魄罗加载: 根据加载块的名字 进行加载块的初始化
    function initPoluoLoadImg(arguments) {
        var i;
        var length = arguments.length;
        var per = arguments[0];
        var timeSpan = arguments[1];
        for (i = 1; i < length; i++) {
            initMoveToUpAndDownByID(arguments[i], per, timeSpan);
        }
    }

    //初始化魄罗尺寸: 根据宽度 设置其高度
    function initPoluoSize() {
        $(".load-aminate-item img").each(function () {
            $(this).height($(this).width());
        });
    }

    //初始化魄罗：所需参数 第一个参数为跳跃高度百分比 第二个参数为跳跃间隔 后续参数为加载块的ID
    function initPoluoLoadAll() {
        //初始化魄罗尺寸
        initPoluoSize();

        //加载等候效果    
        initPoluoLoadImg(arguments);
    }

    //根据ID删除加载块
    function removeAminateByID(idName) {
        $("#" + idName).remove();
    }

    //根据ID设置加载块为Display:none
    function HiddenAminateByID(idName) {
        $("#" + idName).css("visibility", "hidden");
    }

    //根据ID设置加载块为Display:block
    function visibleAminateByID(idName) {
        $("#" + idName).css("visibility", "visible");
    }

/*全局尺寸调整*/
$(window).resize(function () {
    initPoluoSize();
})