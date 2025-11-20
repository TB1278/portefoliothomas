<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mon Profil - Thomas BAPTISTE</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #00c6ff, #0072ff);
            color: #fff;
            margin: 0;
            padding: 0;
        }
        header {
            background: rgba(0, 0, 0, 0.3);
            padding: 15px 0;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            transition: top 0.3s ease;
            z-index: 999;
        }
        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 30px;
            padding: 0;
        }
        nav a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            transition: 0.3s;
        }
        nav a:hover {
            color: #FFD700;
        }
        section {
            background: rgba(255,255,255,0.1);
            margin: 100px auto 40px auto;
            padding: 30px;
            width: 80%;
            backdrop-filter: blur(5px);
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
        .visible { opacity: 1; transform: translateY(0); transition: all 0.7s ease; }
        .titre-principal { text-align: center; font-size: 3rem; font-weight: 700; letter-spacing: 2px; color: #FFD700; margin-bottom: 10px; position: relative; padding: 20px 0; }
        .titre-principal::before { content: ""; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 80%; height: 60px; background: radial-gradient(circle at center, rgba(255,215,0,0.25), rgba(255,215,0,0)); filter: blur(20px); z-index: -1; }
        .titre-principal::after { content: ""; position: absolute; left: 50%; bottom: -10px; transform: translateX(-50%); width: 120px; height: 4px; background: linear-gradient(90deg, #FFD700, #ffffff, #FFD700); border-radius: 10px; }
        footer { text-align: center; padding: 20px 0; background: rgba(0, 0, 0, 0.4); margin-top: 40px;
