import os
import json

# Путь к папке с вашими жанрами музыки
music_genres_path = "G:/Projects/vinilFront/src/assets/catalog/products"

# Словарь для хранения количества файлов в каждой папке
files_count = {}

# Проход по каждой папке с жанром
for genre in os.listdir(music_genres_path):
    print(genre)
    genre_path = os.path.join(music_genres_path, genre)
    if os.path.isdir(genre_path):
        # Проход по каждой папке с номером
        for folder_number in os.listdir(genre_path):
            folder_path = os.path.join(genre_path, folder_number)
            if os.path.isdir(folder_path):
                # Получение списка файлов в папке и подсчет их количества
                files_list = os.listdir(folder_path)
                files_count[genre+"_"+folder_number] = len(files_list)

# Преобразование словаря в JSON формат
json_data = json.dumps(files_count, indent=4)

# Вывод JSON данных
print(json_data)