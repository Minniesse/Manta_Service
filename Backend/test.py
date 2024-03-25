import cv2
import supervision as sv
from ultralytics import YOLO
from kafka import KafkaProducer

producer = KafkaProducer(bootstrap_servers='localhost:9092')
image = cv2.imread("pic.jpeg")
model = YOLO('yolov8s.pt')
result = model(image)[0]
detections = sv.Detections.from_ultralytics(result)
print(detections) 
total_detections = len(detections)
total_detections_str = str(total_detections)
producer.send('try23', total_detections_str.encode('utf-8'))
producer.flush()
print("Total detections: ", total_detections)
