import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Wallet, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function SelkupsLanding() {
  const [loading, setLoading] = useState(true)
  const [selectedNFT, setSelectedNFT] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <motion.img
          src="/images/selkups-logo-animated.gif"
          alt="Selkups Logo"
          className="w-28 h-28 mb-4 drop-shadow-[0_0_25px_rgba(16,185,129,0.8)]"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: [0.8, 1, 0.8], scale: [0.95, 1, 0.95], rotate: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.h1
          className="text-2xl font-bold tracking-widest text-emerald-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          SELKUPS
        </motion.h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[url('/images/selkups-bg.jpg')] bg-cover bg-center text-white">
      <div className="bg-black/70 min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <img src="/images/selkups-logo.png" alt="Selkups Logo" className="w-10 h-10 rounded-full" />
            <h1 className="text-2xl font-bold tracking-widest">SELKUPS</h1>
          </div>
          <nav className="space-x-6 text-sm">
            <a href="#about" className="hover:text-emerald-400">О проекте</a>
            <a href="#token" className="hover:text-emerald-400">Токен SLK</a>
            <a href="#roadmap" className="hover:text-emerald-400">Дорожная карта</a>
            <a href="#nft" className="hover:text-emerald-400">NFT</a>
            <a href="#community" className="hover:text-emerald-400">Сообщество</a>
          </nav>
          <Button className="flex items-center bg-emerald-500 hover:bg-emerald-600">
            <Wallet className="w-4 h-4 mr-2" /> Подключить кошелёк
          </Button>
        </header>
      </div>
    </div>
  )
}