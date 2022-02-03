import os
try:
    from selenium import webdriver
    from webdriver_manager.chrome import ChromeDriverManager
    from tkinter import Tk
    from tkinter import simpledialog
    import os
    import time
    import datetime
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.common.keys import Keys
except:
    os.system('pip install selenium')
    os.system('pip install webdriver-manager')
    os.system('pip install datetime')
    os.system('pip install tk')
    os.system('pip install urllib3')
finally:
    from selenium import webdriver
    from webdriver_manager.chrome import ChromeDriverManager
    from tkinter import Tk
    from tkinter import simpledialog
    import os
    import time
    import datetime
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.webdriver.common.keys import Keys

root=Tk()
driver = webdriver.Chrome(ChromeDriverManager().install())
driver.maximize_window()


