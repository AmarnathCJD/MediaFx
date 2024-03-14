from PyQt6.QtWidgets import QDialog, QVBoxLayout, QLabel, QLineEdit, QDialogButtonBox

class MyDialog(QDialog):
    def __init__(self, parent=None):
        super(MyDialog, self).__init__(parent)

        self.setWindowTitle("URL")
        self.setStyleSheet("background-color: #1c1c1c; color: #f0f0f0")

        self.layout = QVBoxLayout()
        self.setLayout(self.layout)

        self.label = QLabel("Enter The URL")
        self.label.setStyleSheet("font-size: 16px; font-weight: bold")
        self.layout.addWidget(self.label)

        self.lineEdit = QLineEdit()
        self.lineEdit.setStyleSheet("background-color: #303030; color: #f0f0f0; border: 1px solid #404040; border-radius: 5px; padding: 3px; selection-background-color: #f0f0f0; selection-color: #000000;")
        self.layout.addWidget(self.lineEdit)

        self.buttonBox = QDialogButtonBox(QDialogButtonBox.StandardButton.Ok | QDialogButtonBox.StandardButton.Cancel)
        self.buttonBox.setStyleSheet("background-color: #1c1c1c; color: #f0f0f0; border: 1px solid #404040; border-radius: 5px; padding: 3px; width: 100px")
        self.buttonBox.accepted.connect(self.accept)
        self.buttonBox.rejected.connect(self.reject)
        self.layout.addWidget(self.buttonBox)
        
class MyMessageBox(QDialog):
    def __init__(self, parent=None):
        super(MyMessageBox, self).__init__(parent)

        self.setWindowTitle("Error")
        self.setStyleSheet("background-color: #1c1c1c; color: #f0f0f0")
        
        self.layout = QVBoxLayout()
        self.setLayout(self.layout)
        
        self.label = QLabel()
        self.label.setStyleSheet("font-size: 16px; font-weight: bold")
        self.layout.addWidget(self.label)
        
        self.buttonBox = QDialogButtonBox(QDialogButtonBox.StandardButton.Ok)
        self.buttonBox.setStyleSheet("background-color: #1c1c1c; color: #f0f0f0; border: 1px solid #404040; border-radius: 5px; padding: 3px; width: 100px")
        self.buttonBox.accepted.connect(self.accept)
        
        self.layout.addWidget(self.buttonBox)
        
    def set_text(self, text):
        self.label.setText(text)
        
    def set_button_text(self, text):
        self.buttonBox.button(QDialogButtonBox.StandardButton.Ok).setText(text)
        
    def set_button_callback(self, callback):
        self.buttonBox.accepted.connect(callback)
        
        