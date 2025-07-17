from rest_framework import serializers
from .models import Flashcard

class FlashcardSerializer(serializers.ModelSerializer):
    # 'alternate_name' is the name expected in the POST request
    # 'actual_model_field' is the corresponding field in the model
    front = serializers.CharField(source='term')
    back = serializers.CharField(source='definition')

    class Meta:
        model = Flashcard
        fields = ('id', 'front', 'back', 'category')