from PyQt6.QtWidgets import QApplication, QInputDialog, QLineEdit

app = QApplication([])

# Create an input dialog
dialog = QInputDialog()
dialog.setInputMode(QInputDialog.InputMode.TextInput)
dialog.setWindowTitle("URL")
dialog.setLabelText("Enter The URL:")
dialog.setTextEchoMode(QLineEdit.EchoMode.Normal)

# Apply style sheet to the dialog
dialog.setStyleSheet(
    "QLabel { color: white; }"
    "QLineEdit { background-color: #333; color: white; border: 1px solid #666; padding: 5px; }"
    "QPushButton { background-color: #007bff; color: white; border: none; padding: 5px 10px; }"
    "QPushButton:hover { background-color: #0056b3; }"
)

# Show the dialog
ok = dialog.exec()
if ok:
    url = dialog.textValue()
    print("Entered URL:", url)
