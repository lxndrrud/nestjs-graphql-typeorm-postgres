import requests
import controller
from PySide6.QtWidgets import QApplication


if __name__ == "__main__":
    

    app = QApplication()

    widget = controller.WidgetController()
    widget.show()
    app.exec()



