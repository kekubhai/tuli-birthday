/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

export default function BirthdayCake() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(300, 300)
    mountRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = false

    // Create cake layers
    const createCakeLayer = (radius: number, height: number, color: string, y: number) => {
      const geometry = new THREE.CylinderGeometry(radius, radius, height, 32)
      const material = new THREE.MeshPhongMaterial({ color })
      const layer = new THREE.Mesh(geometry, material)
      layer.position.set(0, y, 0)
      return layer
    }

    const bottomLayer = createCakeLayer(1.5, 1, '#ffb6c1', 0)
    const middleLayer = createCakeLayer(1.2, 0.8, '#ff69b4', 0.9)
    const topLayer = createCakeLayer(0.9, 0.6, '#ff1493', 1.6)

    scene.add(bottomLayer, middleLayer, topLayer)

    // Add candles
    const createCandle = (x: number, z: number) => {
      const geometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 16)
      const material = new THREE.MeshPhongMaterial({ color: 0xffffff })
      const candle = new THREE.Mesh(geometry, material)
      candle.position.set(x, 2.1, z)
      scene.add(candle)

      const flameGeometry = new THREE.SphereGeometry(0.07, 16, 16)
      const flameMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
      const flame = new THREE.Mesh(flameGeometry, flameMaterial)
      flame.position.set(x, 2.4, z)
      scene.add(flame)
    }

    createCandle(0, 0)
    createCandle(0.4, 0.4)
    createCandle(-0.4, -0.4)

    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="w-[300px] h-[300px] mx-auto mb-8" />
}

