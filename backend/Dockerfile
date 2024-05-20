# Dockerfile for Django backend
FROM python:3.12-slim

# Set work directory
WORKDIR /usr/src/app/backend

# Install dependencies
COPY requirements.txt ./
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . .

# Expose port 8000 to the outside world
EXPOSE 8000

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Run migrations and start server
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
