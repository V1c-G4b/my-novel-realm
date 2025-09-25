"use client";

import { login, signUp } from "@/_lib/api/authApi";
import { useAuthStore } from "@/_lib/stores/authModalStore";
import { Lock, Mail, User, X } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

type FormData = {
  email: string;
  password: string;
  name?: string;
};

export default function AuthModal() {
  const { isOpen, mode, closeModal, toggleMode } = useAuthStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (isOpen) {
      reset();
    }
  }, [isOpen, mode, reset]);

const onSubmit = async (data: FormData) => {
  try {
    if (mode === 'login') {
      const response = await login(data.email, data.password); 
      if (response) {
        useAuthStore.getState().setUser(response.user); 
      } else {
        console.error('Login falhou');
      }
    } else {
      const response = await signUp(data.email, data.password, data.name ?? '');
      if (response) {
        useAuthStore.getState().setUser(response.user); 
      } else {
        console.error('Registro falhou');
      }
    }
    closeModal();
  } catch (error) {
    console.error('Erro no login:', error);
  }
};

  const isLoginMode = mode === "login";

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="relative m-4 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl outline-none"
      overlayClassName="fixed inset-0 bg-black opacity-80 flex items-center justify-center z-50"
      ariaHideApp={false}
    >
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Fechar modal"
      >
        <X size={24} />
      </button>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          {isLoginMode ? "Bem-vindo de volta!" : "Crie sua conta"}
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          {isLoginMode ? "Faça login para continuar." : "É rápido e fácil."}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        {!isLoginMode && (
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              id="name"
              {...register("name")}
              placeholder="Nome completo"
              className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-gray-700 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        )}

        <div className="relative">
          <Mail
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email é obrigatório" })}
            placeholder="seu.email@exemplo.com"
            className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-gray-700 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div className="relative">
          <Lock
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            id="password"
            type="password"
            {...register("password", { required: "Senha é obrigatória" })}
            placeholder="Sua senha"
            className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-gray-700 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-transform hover:bg-blue-700 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isLoginMode ? "Entrar" : "Criar conta"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        {isLoginMode ? "Não tem uma conta?" : "Já tem uma conta?"}
        <button
          onClick={toggleMode}
          className="ml-1 font-semibold text-blue-600 hover:underline"
        >
          {isLoginMode ? "Registre-se" : "Faça login"}
        </button>
      </p>
    </Modal>
  );
}
