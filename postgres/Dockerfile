# postgres/Dockerfile
FROM postgres:14

# Install locales and set Russian locale
RUN apt-get update && \
    apt-get install -y locales && \
    sed -i 's/# ru_RU.UTF-8 UTF-8/ru_RU.UTF-8 UTF-8/' /etc/locale.gen && \
    locale-gen ru_RU.UTF-8

ENV LANG=ru_RU.UTF-8 \
    LC_ALL=ru_RU.UTF-8