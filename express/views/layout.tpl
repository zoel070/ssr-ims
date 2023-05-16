<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{seo.title}}</title>
    <meta name="keywords" content="{{seo.keywords}}" />
    <meta name="description" content="{{seo.description}}" />
    {% block css %}
    {% endblock %}
</head>
<body>
    {% block content %}
    {% endblock %}

    {% block js %}
    {% endblock %}
</body>
</html>