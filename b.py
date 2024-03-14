# binary manipulator gui

# popuint, popint, popfloat, popstr, popbool

import tkinter as tk
from tkinter import ttk

from tkinter import messagebox
from tkinter import filedialog

import os
import sys
import time
import json
import logging


class BinaryManipulatorGUI:
    def __init__(self, master):
        self.master = master
        self.master.title("Binary Manipulator")
        self.master.geometry("800x600")
        self.master.resizable(False, False)

        self.main_frame = ttk.Frame(self.master)
        self.main_frame.pack(expand=True, fill="both")

        self.main_notebook = ttk.Notebook(self.main_frame)
        self.main_notebook.pack(expand=True, fill="both")

        self.binary_tab = ttk.Frame(self.main_notebook)
        self.main_notebook.add(self.binary_tab, text="Binary")

        self.binary_frame = ttk.Frame(self.binary_tab)
        self.binary_frame.pack(expand=True, fill="both")

        self.binary_text = tk.Text(self.binary_frame, wrap="none")
        self.binary_text.pack(expand=True, fill="both")

        self.binary_scroll = ttk.Scrollbar(self.binary_frame, orient="horizontal", command=self.binary_text.xview)
        self.binary_scroll.pack(side="bottom", fill="x")
        self.binary_text.config(xscrollcommand=self.binary_scroll.set)

        self.binary_text.bind("<Key>", self.on_binary_text_change)

        self.binary_text.bind("<Control-Key-a>", self.select_all)

        self.binary_text.bind("<Control-Key-s>", self.save_file)

        self.binary_text.bind("<Control-Key-o>", self.open_file)

        self.binary_text.bind("<Control-Key-n>", self.new_file)

        self.binary_text.bind("<Control-Key-q>", self.quit)

        self.binary_text.bind("<Control-Key-Shift-s>", self.save_file_as)

        self.binary_text.bind("<Control-Key-Shift-S>", self.save_file_as)

        self.binary_text.bind("<Control-Key-Shift-O>", self.open_file)

        self.binary_text.bind("<Control-Key-Shift-N>", self.new_file)
        
        self.binary_text.bind("<Control-Key-Shift-Q>", self.quit)
        
    def on_binary_text_change(self, event):
        print(event)
        
    def select_all(self, event):
        self.binary_text.tag_add("sel", "1.0", "end")
        return "break"
    
    def save_file(self, event):
        print("Save File")
        return "break"
    