from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import Flashcard
from unittest.mock import patch, MagicMock
import sys
import os

class FlashcardAPITestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.flashcard = Flashcard.objects.create(
            term="What is the capital of France?",
            definition="Paris",
            category="Geography"
        )
        self.list_url = '/api/flashcards/'
        self.detail_url = f'/api/flashcards/{self.flashcard.id}/'

    def test_manage_py_successful_execution(self):
        """
        Test manage.py successful execution when Django is available
        """
        with patch('sys.argv', ['manage.py', 'runserver']):
            with patch('os.environ.setdefault') as mock_setdefault:
                with patch('django.core.management.execute_from_command_line') as mock_execute:
                    # Import and execute the main function
                    import manage
                    manage.main()
                    
                    # Verify setdefault was called with correct arguments
                    mock_setdefault.assert_called_once_with('DJANGO_SETTINGS_MODULE', 'backend.settings')
                    
                    # Verify execute_from_command_line was called with sys.argv
                    mock_execute.assert_called_once_with(['manage.py', 'runserver'])

    def test_get_flashcard_list(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertGreaterEqual(len(response.data), 1)

    def test_get_flashcard_detail(self):
        response = self.client.get(self.detail_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['front'], self.flashcard.term)
        self.assertEqual(response.data['front'], str(self.flashcard))

    def test_create_flashcard(self):
        data = {'front': 'What is 2+2?', 'back': '4', 'category': 'Math'}
        response = self.client.post(self.list_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Flashcard.objects.count(), 2)

    def test_update_flashcard(self):
        data = {'front': 'What is the capital of Germany?', 'back': 'Berlin'}
        response = self.client.put(self.detail_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.flashcard.refresh_from_db()
        self.assertEqual(self.flashcard.definition, 'Berlin')

    def test_delete_flashcard(self):
        response = self.client.delete(self.detail_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Flashcard.objects.count(), 0)
