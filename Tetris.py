import random
import os
import time

# Define the game settings
board_width = 10
board_height = 20
board = [[' ' for _ in range(board_width)] for _ in range(board_height)]

# Tetromino shapes
tetrominos = [
    [[1, 1, 1, 1]],  # I
    [[1, 1], [1, 1]],  # O
    [[1, 1, 1], [0, 1, 0]],  # T
    [[1, 1, 0], [0, 1, 1]],  # Z
    [[0, 1, 1], [1, 1, 0]],  # S
    [[1, 1, 1], [1, 0, 0]],  # L
    [[1, 1, 1], [0, 0, 1]]   # J
]

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def display_board():
    clear_screen()
    for row in board:
        print('|' + ''.join(row) + '|')
    print('+' + '-' * board_width + '+')

def check_collision(shape, offset):
    ox, oy = offset
    for y, row in enumerate(shape):
        for x, cell in enumerate(row):
            if cell and (ox + x < 0 or ox + x >= board_width or oy + y >= board_height or board[oy + y][ox + x] != ' '):
                return True
    return False

def place_shape(shape, offset):
    ox, oy = offset
    for y, row in enumerate(shape):
        for x, cell in enumerate(row):
            if cell:
                board[oy + y][ox + x] = '#'

def remove_complete_lines():
    global board
    new_board = [row for row in board if any(cell == ' ' for cell in row)]
    lines_removed = board_height - len(new_board)
    board = [[' ' for _ in range(board_width)] for _ in range(lines_removed)] + new_board

def tetris():
    current_shape = random.choice(tetrominos)
    current_x = board_width // 2 - len(current_shape[0]) // 2
    current_y = 0

    while True:
        display_board()
        if check_collision(current_shape, (current_x, current_y + 1)):
            place_shape(current_shape, (current_x, current_y))
            remove_complete_lines()
            current_shape = random.choice(tetrominos)
            current_x = board_width // 2 - len(current_shape[0]) // 2
            current_y = 0
            if check_collision(current_shape, (current_x, current_y)):
                print("Game Over!")
                break
        else:
            current_y += 1

        # Simple user input
        user_input = input("Move (a: left, d: right, s: down, q: quit): ")
        if user_input == 'a' and not check_collision(current_shape, (current_x - 1, current_y)):
            current_x -= 1
        elif user_input == 'd' and not check_collision(current_shape, (current_x + 1, current_y)):
            current_x += 1
        elif user_input == 's' and not check_collision(current_shape, (current_x, current_y + 1)):
            current_y += 1
        elif user_input == 'q':
            break

        time.sleep(0.1)

tetris()
