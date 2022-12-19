import widget
from PySide6.QtWidgets import QWidget

class WidgetController(QWidget):
    form = widget.Ui_Form()

    def __init__(self) -> None:
        super().__init__()
        self.form.setupUi(self)
