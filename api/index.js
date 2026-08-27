module.exports = (req, res) => {
    const url = req.url;
    const method = req.method;

    // Direct Connection Termination Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Connection', 'close'); // Har request ke baad connection reset ke liye

    if (method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (url.includes('request=get_update')) {
        if (url.includes('module=MTK')) {
            return res.status(200).json({"updates":{"module_name":"MTK","url_link":"https://dl.mhunlocker.com/MTK/MH_Unlocker_MTK.exe","version":"1.6","extension":"exe","allowed_versions":"1.6"}});
        }
        if (url.includes('module=mh_unlocker')) {
            return res.status(200).json({"updates":{"module_name":"mh_unlocker","url_link":"https://dl.mhunlocker.com/Updater/MH_Unlocker_Pro.exe","version":"8.4","extension":"exe","allowed_versions":"8.4"}});
        }
        if (url.includes('module=Qcom')) {
            return res.status(200).json({"updates":{"module_name":"Qcom","url_link":"https://dl.mhunlocker.com/Qcom/MH_Unlocker_Qcom.exe","version":"2.0","extension":"exe","allowed_versions":"2.0"}});
        }
        if (url.includes('module=unisoc')) {
            return res.status(200).json({"updates":{"module_name":"unisoc","url_link":"https://dl.mhunlocker.com/Unisoc/MH_Unlocker_Spd.exe","version":"2.6","extension":"exe","allowed_versions":"2.6"}});
        }
    }

    if (url.includes('/api/login')) {
        return res.status(200).json({
            "success": true,
            "token": "8249|MbaaDEF59bVBabzkLjCF89gAe4gAcUiN0uTfFU1P3a2965b5",
            "user": {
                "id": 7347,
                "username": "GSMYOGESH",
                "email": "admin@gsmyogesh.com",
                "credits": 99,
                "credit_balance": "99",
                "status": true,
                "is_blocked": false
            }
        });
    }

    if (url.includes('request=credit_balance')) {
        return res.status(200).json({
            "credit_balance": "99",
            "credits": 99
        });
    }

    if (url.includes('request=rule1') || url.includes('request=rule')) {
        return res.status(200).json({"status": {"result": "success", "credit": 99}});
    }

    if (url.includes('/api/log/store')) {
        return res.status(200).json({"success": true, "message": "Authenticated"});
    }

    return res.status(200).json({"success": true, "message": "Interceptor Active"});
};
