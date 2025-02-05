FROM debian:12

# Install Postfix (and mailutils for basic mail tools)
RUN apt-get update && \
    apt-get install -y postfix mailutils && \
    apt-get clean

# Create a local user to receive all mail
RUN useradd -m mailuser

# Create /etc/mailname (required by Postfix)
RUN echo ${MAILNAME} > /etc/mailname

# Copy custom Postfix configuration files
COPY main.cf /etc/postfix/main.cf
COPY virtual /etc/postfix/virtual

# Compile the virtual alias file (using regexp maps)
RUN postmap /etc/postfix/virtual

# Start Postfix in the foreground
CMD ["sh", "-c", "postfix start-fg"]