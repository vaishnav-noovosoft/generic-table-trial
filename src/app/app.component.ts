import { Component } from '@angular/core';
import {IProduct} from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'generic-table-trial';
  products: IProduct[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 89.99,
      description: "High-quality wireless headphones with noise cancellation.",
      image: "https://example.com/images/wireless-headphones.jpg"
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      price: 49.99,
      description: "Portable Bluetooth speaker with deep bass and long battery life.",
      image: "https://example.com/images/bluetooth-speaker.jpg"
    },
    {
      id: 3,
      name: "Smartphone",
      price: 699.99,
      description: "Latest model smartphone with stunning display and advanced camera features.",
      image: "https://example.com/images/smartphone.jpg"
    },
    {
      id: 4,
      name: "Laptop",
      price: 1199.99,
      description: "Lightweight laptop with powerful performance and long battery life.",
      image: "https://example.com/images/laptop.jpg"
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: 29.99,
      description: "Ergonomic gaming mouse with customizable RGB lighting.",
      image: "https://example.com/images/gaming-mouse.jpg"
    },
    {
      id: 6,
      name: "4K Monitor",
      price: 329.99,
      description: "27-inch 4K UHD monitor with vibrant colors and high refresh rate.",
      image: "https://example.com/images/4k-monitor.jpg"
    },
    {
      id: 7,
      name: "Mechanical Keyboard",
      price: 89.99,
      description: "Durable mechanical keyboard with tactile switches.",
      image: "https://example.com/images/mechanical-keyboard.jpg"
    },
    {
      id: 8,
      name: "Fitness Tracker",
      price: 59.99,
      description: "Water-resistant fitness tracker with heart rate monitoring.",
      image: "https://example.com/images/fitness-tracker.jpg"
    },
    {
      id: 9,
      name: "Smartwatch",
      price: 199.99,
      description: "Feature-packed smartwatch with customizable watch faces.",
      image: "https://example.com/images/smartwatch.jpg"
    },
    {
      id: 10,
      name: "Action Camera",
      price: 249.99,
      description: "Compact action camera with 4K recording capabilities.",
      image: "https://example.com/images/action-camera.jpg"
    },
    {
      id: 11,
      name: "Drone",
      price: 499.99,
      description: "High-performance drone with 4K camera and GPS functionality.",
      image: "https://example.com/images/drone.jpg"
    },
    {
      id: 12,
      name: "External Hard Drive",
      price: 89.99,
      description: "Portable external hard drive with 2TB of storage.",
      image: "https://example.com/images/external-hard-drive.jpg"
    },
    {
      id: 13,
      name: "Wireless Charger",
      price: 19.99,
      description: "Fast wireless charger compatible with most devices.",
      image: "https://example.com/images/wireless-charger.jpg"
    },
    {
      id: 14,
      name: "VR Headset",
      price: 299.99,
      description: "Immersive VR headset with adjustable head straps and high resolution.",
      image: "https://example.com/images/vr-headset.jpg"
    },
    {
      id: 15,
      name: "Streaming Webcam",
      price: 89.99,
      description: "HD streaming webcam with auto-focus and built-in microphone.",
      image: "https://example.com/images/streaming-webcam.jpg"
    },
    {
      id: 16,
      name: "Smart Thermostat",
      price: 149.99,
      description: "Energy-efficient smart thermostat with remote control functionality.",
      image: "https://example.com/images/smart-thermostat.jpg"
    },
    {
      id: 17,
      name: "Electric Scooter",
      price: 599.99,
      description: "Foldable electric scooter with long-range battery.",
      image: "https://example.com/images/electric-scooter.jpg"
    },
    {
      id: 18,
      name: "Portable Projector",
      price: 229.99,
      description: "Compact portable projector with 1080p resolution support.",
      image: "https://example.com/images/portable-projector.jpg"
    },
    {
      id: 19,
      name: "Noise-Canceling Earbuds",
      price: 129.99,
      description: "True wireless earbuds with active noise canceling.",
      image: "https://example.com/images/noise-canceling-earbuds.jpg"
    },
    {
      id: 20,
      name: "Smart Home Camera",
      price: 99.99,
      description: "1080p smart home camera with motion detection and night vision.",
      image: "https://example.com/images/smart-home-camera.jpg"
    }
  ];
  columns = [
    {
      title: "Id",
      key: "id",
    },
    {
      title: "Name",
      key: "name",
    },
    {
      title: "Price",
      key: "price",
    }
  ]
}
