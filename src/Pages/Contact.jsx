import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Mengirim Pesan...',
      html: 'Harap tunggu selagi kami mengirim pesan Anda',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      // Ganti dengan email Anda di FormSubmit
      const formSubmitUrl = 'https://formsubmit.co/ahmadwidad54@gmail.com';
      
      // Siapkan data form untuk FormSubmit
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);
      submitData.append('_subject', 'Pesan Baru dari Website Portfolio');
      submitData.append('_captcha', 'false'); // Nonaktifkan captcha
      submitData.append('_template', 'table'); // Format email sebagai tabel

      await axios.post(formSubmitUrl, submitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

     
      Swal.fire({
        title: 'Berhasil!',
        text: 'Pesan Anda telah berhasil terkirim!',
        icon: 'success',
        confirmButtonColor: '#3b82f6',
        timer: 2000,
        timerProgressBar: true
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      if (error.request && error.request.status === 0) {
        Swal.fire({
          title: 'Berhasil!',
          text: 'Pesan Anda telah berhasil terkirim!',
          icon: 'success',
          confirmButtonColor: '#3b82f6',
          timer: 2000,
          timerProgressBar: true
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: 'Gagal!',
          text: 'Terjadi kesalahan. Silakan coba lagi nanti.',
          icon: 'error',
          confirmButtonColor: '#3b82f6'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-[5%] sm:px-[5%] lg:px-[10%] " >


      <div
        className="h-auto py-5 md:py-10 flex items-center justify-center 2xl:pr-[3.1%] lg:pr-[3.8%]  md:px-0"
        id="Contact"
      >
        <div className="container mx-auto px-[5%] md:px-[10%] flex justify-center">
          <div
            className="w-full max-w-7xl bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-4 py-6 sm:p-10 transform transition-all duration-500 hover:shadow-[#3b82f6]/10"
          >
            <div className="flex justify-between items-start mb-6 md:mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#06B6D4]">
                  Hubungi
                </h2>
                <p className="text-gray-400">
                  Ada yang ingin didiskusikan? Kirim saya pesan dan mari kita bicara.
                </p>
              </div>
              <Share2 className="w-10 h-10 text-[#3b82f6] opacity-50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <form 
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
              >
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="relative group"
                  >
                    <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#3b82f6] transition-colors" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full p-3 md:p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 transition-all duration-300 hover:border-[#3b82f6]/30 disabled:opacity-50"
                      required
                    />
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="relative group"
                  >
                    <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#3b82f6] transition-colors" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Anda"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full p-3 md:p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 transition-all duration-300 hover:border-[#3b82f6]/30 disabled:opacity-50"
                      required
                    />
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="relative group"
                >
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#3b82f6] transition-colors" />
                  <textarea
                    name="message"
                    placeholder="Pesan Anda"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/30 transition-all duration-300 hover:border-[#3b82f6]/30 h-[7rem] md:h-[9.9rem] disabled:opacity-50"
                    required
                  />
                </div>
                <button
                  data-aos="fade-up"
                  data-aos-delay="400"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#3b82f6] to-[#06B6D4] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#3b82f6]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>

              <div className="flex flex-col justify-center">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
