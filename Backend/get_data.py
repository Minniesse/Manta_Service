from kafka import KafkaConsumer

# Create a Kafka consumer
consumer = KafkaConsumer(
    'try23',
    bootstrap_servers='localhost:9092',  # Kafka broker(s)
    group_id='my-group',            # Consumer group ID
    auto_offset_reset='earliest',   # Start reading at the earliest message
    enable_auto_commit=True,        # Commit offsets automatically
    value_deserializer=lambda x: x.decode('utf-8')  # Deserialize message value
)

# Start consuming messages
for message in consumer:
    # Process the message
    print("Received message:", message.value)
