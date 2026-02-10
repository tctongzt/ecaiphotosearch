exports.handler = async function(event, context) {
  // 处理 OPTIONS 请求（CORS 预检）
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
      },
      body: ''
    };
  }

  // 只处理 POST 请求
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ msg: 'Method not allowed' })
    };
  }

  try {
    // 解析请求体
    const body = JSON.parse(event.body);
    
    // Coze API 配置
    const API_URL = 'https://z6k3kmq245.coze.site/run';
    const API_TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQxNTllYWI4LTQ1NmUtNGEwYS05ODIxLTE2NWVhM2U1MDQzYSJ9.eyJpc3MiOiJodHRwczovL2FwaS5jb3plLmNuIiwiYXVkIjpbInA0Y2dNTUJYN2tEeXd3R2pxN2JXbjBIRUplUkFrU0dBIl0sImV4cCI6ODIxMDI2Njg3Njc5OSwiaWF0IjoxNzcwNDcxMzIwLCJzdWIiOiJzcGlmZmU6Ly9hcGkuY296ZS5jbi93b3JrbG9hZF9pZGVudGl0eS9pZDo3NjA0MDc4MzQ1MjM1NDY0MjMzIiwic3JjIjoiaW5ib3VuZF9hdXRoX2FjY2Vzc190b2tlbl9pZDo3NjA0MTE2NDE3OTIyNzI3OTg3In0.guAPngQ9SVfmhxTOZJpapQKmpTwnKVYE5DalcRqH7nHpE19-dCIKAmP69kyxCQnunKcz68EO1KkmV5kRZ3fz57wD0-QBS0mHyBJB_MWJ4RraBTlNHtogKGur30CMBp_JN0tQ_dmO7LWOv2ywYkOs7wZszBrnmWQsLdPu6W1WPB9GGl8cAiuj4oUFBUJsePhigw_oe0IqkT2B1rdFkP3-xrz79igJiB8Dzbd0suaEb4J8ml5fGTikobbooEWV56d_ylViIZQx0zYT7Z8H9mCQ6fixx-ej_zabAoSgrdMNN4gzQ0Daqra-d4Ow89ZvzuE6KZGKRRZLu5pKjHDe5YYhDw';

    // 转发请求到 Coze API
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`
      },
      body: JSON.stringify(body)
    });

    // 获取响应数据
    const data = await response.json();

    // 返回响应，添加 CORS 头
    return {
      statusCode: response.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
      },
      body: JSON.stringify(data)
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 
        msg: 'Internal server error',
        error: error.message,
        stack: error.stack
      })
    };
  }
};
