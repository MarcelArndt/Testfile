import os
import json
LIST_OF_PICS = []

def look_any_data():
    files = os.listdir("../img/urlaubsbilder")
    for each in files:
        path = f"../img/urlaubsbilder/{each}"
        LIST_OF_PICS.append(path)

def export_in_json():
        os.path.isfile("list_of_picture.json")
        with open("list_of_picture.json", "w") as data_file:
            json.dump(LIST_OF_PICS, data_file, indent=1)

look_any_data()
export_in_json()
