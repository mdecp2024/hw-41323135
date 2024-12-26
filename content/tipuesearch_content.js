var tipuesearch = {"pages": [{'title': 'About', 'text': '國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲: https://github.com/mdecp2024/hw-41323135 \n 個人網站: https://mdecp2024.github.io/hw-41323135/ \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'About.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w10', 'text': '\xa0題目一: \n \n \xa0題目二: \n \n \xa0題目三: \n \n \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'w11_hw', 'text': '題目一 \n 程式碼 \n \n \n 題目二 \n 程式碼 \n \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12_hw', 'text': '1. 請各組組員分別利用\xa0 Brython 以及 Jupyter lab \xa0環境, 執行 可攜程式 \xa0notebook 目錄中的\xa0 01_string_input_print.ipynb 至\xa010_for_search.ipynb \xa0筆記本程式, 完成後請將能在 Brython 執行的程式碼存入個人\xa0 Gist \xa0後, 將各程式執行連結放入 w12_hw 網頁上. 最後請說明各範例中所使用的程式語法以及執行心得. \n \n <<<<<<< HEAD \n <<<<<<< HEAD \n 01_string_input_print\xa0 \n 程式碼 \n 02_variables \n 程式碼 \n ======= \n 01_string_input_print \n 程式碼 \n 02_variables \n 程式碼 \n >>>>>>> bdeedf832270094506b4e66fa5f24da1db3e1783 \n 03_list_if_in_else \n 程式碼 \n 04_list_append_remove \n 程式碼 \n 05_list_index_pop_insert \n 程式碼 \n 06_list_slicing \n 程式碼 \n 07_list_slicing_use \n 程式碼 \n 08_for_range \n 程式碼 \n 09_for_loop_if_equals \n 程式碼 \n 10_for_search \n 程式碼 \n <<<<<<< HEAD \n 程式碼 \n \n \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '程式連結 \n >>>>>>> bdeedf832270094506b4e66fa5f24da1db3e1783 \n  導入 brython 程式庫  \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w14_ex', 'text': '請根據兩個圓繪圖所圍成的 區域 (目前圍成三個區域, 但若圓心移動可能彼此獨立)進行不同顏色著色, 條件是當各圓半徑與圓心座標變動時, 程式只需輸入兩個圓的圓心座標與半徑, 就可以完成各區域的著色任務. \n 參考範例 \n 多個圓相交區域著色範例 \n 以下為參考範例的詳細說明, 請根據此一程式架構, 修改為三個圓的區域塗色任務. \n from browser import html\nfrom browser import document as doc\nimport random\nimport math\n\xa0\n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n\xa0\xa0\xa0\xa0"""\n\xa0\xa0\xa0\xa0初始化畫布，創建一個指定大小的 Canvas 元素，並將其加到 HTML 文件中。\n\xa0\xa0\xa0\xa0返回畫布元素和它的 2D 繪圖上下文。\n\xa0\xa0\xa0\xa0"""\n\xa0\xa0\xa0\xa0# 創建一個 canvas 元素，並設置其寬度與高度\n\xa0\xa0\xa0\xa0canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n\xa0\xa0\xa0\xa0# 將創建的 canvas 元素添加到指定的 HTML div 元素中\n\xa0\xa0\xa0\xa0brython_div = doc[id]\xa0 # 獲取指定 id 的 div 元素\n\xa0\xa0\xa0\xa0brython_div <= canvas\xa0 # 將 canvas 插入到該 div 中\n\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0# 獲取 canvas 的 2D 繪圖上下文，這是進行繪圖的主要接口\n\xa0\xa0\xa0\xa0ctx = canvas.getContext("2d")\n\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0# 返回畫布和它的 2D 繪圖上下文\n\xa0\xa0\xa0\xa0return canvas, ctx\n\xa0\n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n\xa0\xa0\xa0\xa0"""\n\xa0\xa0\xa0\xa0生成一個隨機的 RGB 顏色字符串。\n\xa0\xa0\xa0\xa0返回的顏色是 "rgb(r, g, b)" 格式，其中 r, g, b 是 0 到 255 之間的隨機整數。\n\xa0\xa0\xa0\xa0"""\n\xa0\xa0\xa0\xa0r = random.randint(0, 255)\xa0 # 隨機生成紅色成分 (0-255)\n\xa0\xa0\xa0\xa0g = random.randint(0, 255)\xa0 # 隨機生成綠色成分 (0-255)\n\xa0\xa0\xa0\xa0b = random.randint(0, 255)\xa0 # 隨機生成藍色成分 (0-255)\n\xa0\xa0\xa0\xa0return f"rgb({r}, {g}, {b})"\xa0 # 返回隨機顏色字符串\n\xa0\n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n\xa0\xa0\xa0\xa0"""\n\xa0\xa0\xa0\xa0判斷一個點 (px, py) 是否位於圓 (cx, cy, r) 內。\n\xa0\xa0\xa0\xa0(cx, cy) 為圓心坐標，r 為圓的半徑。\n\xa0\xa0\xa0\xa0"""\n\xa0\xa0\xa0\xa0# 使用圓的方程 (px - cx)² + (py - cy)² <= r² 判斷點是否在圓內\n\xa0\xa0\xa0\xa0return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\xa0\n# 使用者設定的圓心座標和半徑，並進行掃描線填充\ndef draw_circles(x1, y1, r1, x2, y2, r2):\n\xa0\xa0\xa0\xa0"""\n\xa0\xa0\xa0\xa0根據傳入的兩個圓的圓心和半徑，繪製圓形並使用掃描線算法填充區域。\n\xa0\xa0\xa0\xa0x1, y1, r1 是圓1的圓心坐標和半徑\n\xa0\xa0\xa0\xa0x2, y2, r2 是圓2的圓心坐標和半徑\n\xa0\xa0\xa0\xa0"""\n\xa0\xa0\xa0\xa0# 初始化畫布，創建並取得畫布和其 2D 上下文\n\xa0\xa0\xa0\xa0canvas, ctx = initialize_canvas(400, 400)\n\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0# 清空畫布，以便重新繪製\n\xa0\xa0\xa0\xa0ctx.clearRect(0, 0, canvas.width, canvas.height)\n\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0# 顏色區域存儲字典，存儲不同區域的顏色\n\xa0\xa0\xa0\xa0color_dict = {}\n\xa0\n\xa0\xa0\xa0\xa0# 使用掃描線方法填充區域，逐行掃描畫布上的每個像素\n\xa0\xa0\xa0\xa0for py in range(0, canvas.height):\xa0 # 遍歷每一行的 y 坐標\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 當前掃描線的顏色初始化為 None，後面會根據位置選擇顏色\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0current_color = None\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 遍歷當前行中的每個像素點 (px, py)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0for px in range(0, canvas.width):\xa0 # 遍歷每一列的 x 坐標\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 判斷該點是否在圓1內\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0in_circle1 = is_point_in_circle(px, py, x1, y1, r1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 判斷該點是否在圓2內\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0in_circle2 = is_point_in_circle(px, py, x2, y2, r2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if in_circle1 and in_circle2:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 如果點同時在兩個圓內，則是交集區域\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if "intersection" not in color_dict:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 如果還沒有為交集區域分配顏色，則分配一個隨機顏色\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0color_dict["intersection"] = random_color_generator()\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 設置當前掃描線的顏色為交集區域的顏色\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0current_color = color_dict["intersection"]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0elif in_circle1:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 如果點只在圓1內，則是圓1的區域\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if "circle1" not in color_dict:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 如果還沒有為圓1分配顏色，則分配一個隨機顏色\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0color_dict["circle1"] = random_color_generator()\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 設置當前掃描線的顏色為圓1區域的顏色\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0current_color = color_dict["circle1"]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0elif in_circle2:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 如果點只在圓2內，則是圓2的區域\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if "circle2" not in color_dict:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 如果還沒有為圓2分配顏色，則分配一個隨機顏色\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0color_dict["circle2"] = random_color_generator()\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 設置當前掃描線的顏色為圓2區域的顏色\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0current_color = color_dict["circle2"]\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0else:\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 如果點不在任何圓內，則是背景區域\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0current_color = "white"\xa0 # 背景色設為白色\n\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 設置當前像素的顏色並進行填充\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ctx.fillStyle = current_color\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0# 填充當前像素 (px, py)，並且寬度和高度均為 1 像素\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ctx.fillRect(px, py, 1, 1)\xa0 # 填充一個像素\n\xa0\n# 直接設定圓心和半徑\nx1, y1, r1 = 150, 200, 100\xa0 # 圓1：圓心 (150, 200)，半徑 100\nx2, y2, r2 = 250, 200, 100\xa0 # 圓2：圓心 (250, 200)，半徑 100\n\xa0\n# 呼叫畫圓函式，並繪製兩個圓\ndraw_circles(x1, y1, r1, x2, y2, r2) \n 三個圓 \n from browser import html\nfrom browser import document as doc\nimport random\nimport math\n\n# 定義一個函式來初始化畫布\ndef initialize_canvas(canvas_width=400, canvas_height=400, id="brython_div1"):\n    """\n    初始化畫布，創建一個指定大小的 Canvas 元素，並將其加到 HTML 文件中。\n    返回畫布元素和它的 2D 繪圖上下文。\n    """\n    # 創建一個 canvas 元素，並設置其寬度與高度\n    canvas = html.CANVAS(width=canvas_width, height=canvas_height)\n    # 將創建的 canvas 元素添加到指定的 HTML div 元素中\n    brython_div = doc[id]  # 獲取指定 id 的 div 元素\n    brython_div <= canvas  # 將 canvas 插入到該 div 中\n     \n    # 獲取 canvas 的 2D 繪圖上下文，這是進行繪圖的主要接口\n    ctx = canvas.getContext("2d")\n     \n    # 返回畫布和它的 2D 繪圖上下文\n    return canvas, ctx\n\n# 定義一個隨機顏色生成函式\ndef random_color_generator():\n    """\n    生成一個隨機的 RGB 顏色字符串。\n    返回的顏色是 "rgb(r, g, b)" 格式，其中 r, g, b 是 0 到 255 之間的隨機整數。\n    """\n    r = random.randint(0, 255)  # 隨機生成紅色成分 (0-255)\n    g = random.randint(0, 255)  # 隨機生成綠色成分 (0-255)\n    b = random.randint(0, 255)  # 隨機生成藍色成分 (0-255)\n    return f"rgb({r}, {g}, {b})"  # 返回隨機顏色字符串\n\n# 判斷點 (px, py) 是否在圓內\ndef is_point_in_circle(px, py, cx, cy, r):\n    """\n    判斷一個點 (px, py) 是否位於圓 (cx, cy, r) 內。\n    (cx, cy) 為圓心坐標，r 為圓的半徑。\n    """\n    # 使用圓的方程 (px - cx)² + (py - cy)² <= r² 判斷點是否在圓內\n    return (px - cx) ** 2 + (py - cy) ** 2 <= r ** 2\n\n# 使用者設定的圓心座標和半徑，並進行掃描線填充\ndef draw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3):\n    """\n    根據傳入的三個圓的圓心和半徑，繪製圓形並使用掃描線算法填充區域。\n    x1, y1, r1 是圓1的圓心坐標和半徑\n    x2, y2, r2 是圓2的圓心坐標和半徑\n    x3, y3, r3 是圓3的圓心坐標和半徑\n    """\n    # 初始化畫布，創建並取得畫布和其 2D 上下文\n    canvas, ctx = initialize_canvas(400, 400)\n     \n    # 清空畫布，以便重新繪製\n    ctx.clearRect(0, 0, canvas.width, canvas.height)\n     \n    # 顏色區域存儲字典，存儲不同區域的顏色\n    color_dict = {}\n\n    # 使用掃描線方法填充區域，逐行掃描畫布上的每個像素\n    for py in range(0, canvas.height):  # 遍歷每一行的 y 坐標\n        # 當前掃描線的顏色初始化為 None，後面會根據位置選擇顏色\n        current_color = None \n         \n        # 遍歷當前行中的每個像素點 (px, py)\n        for px in range(0, canvas.width):  # 遍歷每一列的 x 坐標\n            # 判斷該點是否在圓1內\n            in_circle1 = is_point_in_circle(px, py, x1, y1, r1)\n            # 判斷該點是否在圓2內\n            in_circle2 = is_point_in_circle(px, py, x2, y2, r2)\n            # 判斷該點是否在圓3內\n            in_circle3 = is_point_in_circle(px, py, x3, y3, r3)\n             \n            if in_circle1 and in_circle2 and in_circle3:\n                # 如果點同時在三個圓內，則是交集區域\n                if "intersection" not in color_dict:\n                    # 如果還沒有為交集區域分配顏色，則分配一個隨機顏色\n                    color_dict["intersection"] = random_color_generator()\n                current_color = color_dict["intersection"]\n            elif in_circle1 and in_circle2:\n                # 如果點在圓1和圓2的交集區域（不含圓3）\n                if "circle1_circle2" not in color_dict:\n                    color_dict["circle1_circle2"] = random_color_generator()\n                current_color = color_dict["circle1_circle2"]\n            elif in_circle1 and in_circle3:\n                # 如果點在圓1和圓3的交集區域（不含圓2）\n                if "circle1_circle3" not in color_dict:\n                    color_dict["circle1_circle3"] = random_color_generator()\n                current_color = color_dict["circle1_circle3"]\n            elif in_circle2 and in_circle3:\n                # 如果點在圓2和圓3的交集區域（不含圓1）\n                if "circle2_circle3" not in color_dict:\n                    color_dict["circle2_circle3"] = random_color_generator()\n                current_color = color_dict["circle2_circle3"]\n            elif in_circle1:\n                # 如果點只在圓1內\n                if "circle1" not in color_dict:\n                    color_dict["circle1"] = random_color_generator()\n                current_color = color_dict["circle1"]\n            elif in_circle2:\n                # 如果點只在圓2內\n                if "circle2" not in color_dict:\n                    color_dict["circle2"] = random_color_generator()\n                current_color = color_dict["circle2"]\n            elif in_circle3:\n                # 如果點只在圓3內\n                if "circle3" not in color_dict:\n                    color_dict["circle3"] = random_color_generator()\n                current_color = color_dict["circle3"]\n            else:\n                # 如果點不在任何圓內，則是背景區域\n                current_color = "white"  # 背景色設為白色\n\n            # 設置當前像素的顏色並進行填充\n            ctx.fillStyle = current_color\n            # 填充當前像素 (px, py)，並且寬度和高度均為 1 像素\n            ctx.fillRect(px, py, 1, 1)  # 填充一個像素\n\n# 直接設定圓心和半徑\nx1, y1, r1 = 150, 200, 100  # 圓1：圓心 (150, 200)，半徑 100\nx2, y2, r2 = 250, 200, 100  # 圓2：圓心 (250, 200)，半徑 100\nx3, y3, r3 = 200, 150, 100  # 圓3：圓心 (200, 150)，半徑 100\n\n# 呼叫畫圓函式，並繪製三個圓\ndraw_circles(x1, y1, r1, x2, y2, r2, x3, y3, r3)\n \n \n', 'tags': '', 'url': 'w14_ex.html'}, {'title': 'w15', 'text': '題目一: 請利用 Gist 與 Brython 程式環境, 在個人的課程網站中新增一個頁面, 標題為 w15, 以"從 1 累加到 100" \n anchor \n sum_result = 0 #建立變數sum_result\ni = 1 #指定i等於1\nwhile i <= 100:     #使用while迴圈把i加到等於100\n    sum_result += i   \n    i += 1\nprint(sum_result) \n 題目二: 延伸上題, 設計一個函式 addto(1, 100), 可以完成上述的累加結果. \n addto \n #運算程式\ndef addto(start, end):   #定義函數addto\n    sum_result = 0       #設定數值sum_result=0\n    i = start            #設定i=start\n    while i <= end:      #設結束之值為end\n        sum_result += i  \n        i += 1\n    return sum_result    #終止函數運行並返回數值至result\n      \n#調用程式\nresult = addto(1, 100)   #設定起始值\nprint(result)            #列印result \n 題目三: 延伸上題, 設計一個函式 add_only_even(1, 100), 可以完成從第一個輸入整數, 累加到第二個輸入變數的累加結果. \n add_only_even\xa0 \n def add_only_even(start, end):\n    """\n    計算從 start 到 end 之間所有偶數的總和\n \n    參數:\n    start (int): 起始數字\n    end (int): 結束數字\n \n    回傳:\n    int: 偶數的累加總和\n    """\n    # 使用 range 範圍產生器來選擇偶數\n    even_numbers = range(start + (1 if start % 2 != 0 else 0), end + 1, 2)\n     \n    # 返回偶數的總和\n    return sum(even_numbers)\n \n# 測試函式\nresult = add_only_even(1, 100)\nprint(f"從 1 累加到 100 的偶數總和是: {result}") \n 題目四: 延伸上題, 設計一個函式 add_avoid_8(1, 100), 可以完成從第一個輸入整數, 累加到第二個輸入變數的累加過程, 必須避開數字出現"8"的整數,  \n add_avoid_8\xa0 \n def addto(init, addto):\n    #init = 1\n    #addto = 100\n    sum=0\n    for i in range (init, addto+1):\n        #print (i)\n        sum += i\n    print(sum)\n \ndef add_only_even(init, addto):\n    #init = 1\n    #addto = 100\n    sum = 0\n    for i in range(init+1, addto+1, 2):\n        #print (i)\n        sum += i\n        #print(sum)\n    print(sum)\n \ndef avoid8(init, addto):\n    #init = 1\n    #addto = 100\n    sum = 0\n    for i in range(init, addto+1):\n        #print (i)\n        # 判斷數值中有沒有 8\n        if "8" in str(i):\n            pass\n        else:\n            sum += i\n            #print(i)\n        #print(sum)\n    print(sum)\n     \n#add_only_even(1, 100)\navoid8(1, 100) \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '>>>>>>> aa6e6a6e29c0d1c17e24dd9e0a322fa0a894a098 \n 主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n https://mde.tw/cp2024/content/Brython.html \n \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};