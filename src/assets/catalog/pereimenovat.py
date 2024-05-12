import os

# Путь к папке с вашими жанрами музыки
music_genres_path = "G:/Projects/vinilFront/src/assets/catalog/products"

# Проход по каждой папке с жанром
for genre in os.listdir(music_genres_path):
    genre_path = os.path.join(music_genres_path, genre)
    if os.path.isdir(genre_path):
        # Проход по каждой папке с номером
        for folder_number in os.listdir(genre_path):
            folder_path = os.path.join(genre_path, folder_number)
            if os.path.isdir(folder_path):
                # Проход по каждому файлу в папке
                i1 = 1
                for filename in os.listdir(folder_path):
                    # Получение номера файла
                    file_number, file_extension = os.path.splitext(filename)
                    # Формирование нового имени файла
                    new_filename = f"{genre}_{folder_number}_{i1}{file_extension}"
                    # Полный путь к файлу
                    old_filepath = os.path.join(folder_path, filename)
                    new_filepath = os.path.join(folder_path, new_filename)
                    # Переименование файла
                    os.rename(old_filepath, new_filepath)
                    i1+=1