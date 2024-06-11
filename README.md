# Kantor Internetowy

Kantor Internetowy to aplikacja umożliwiająca wymianę walut online oraz realizację płatności. 

## Funkcjonalności

- **Rejestracja użytkownika:** Użytkownik może założyć nowe konto, podając nazwę użytkownika, hasło i adres e-mail. Dane są walidowane, a hasło jest bezpiecznie przechowywane w postaci zahaszowanej.
  
- **Logowanie użytkownika:** Zarejestrowani użytkownicy mogą zalogować się, podając swoje dane logowania. Po autoryzacji użytkownik otrzymuje token JWT, który jest wykorzystywany do autoryzacji w innych częściach aplikacji.

- **Wyświetlanie kursów walut:** Aplikacja pobiera aktualne kursy walut z Narodowego Banku Polskiego poprzez zewnętrzne REST API. Kursy walut są wyświetlane w formie listy, dostępnej dla wszystkich użytkowników.

- **Tworzenie płatności:** Użytkownik ma możliwość tworzenia nowych płatności, podając dane takie jak kwota, waluta, opis itp. Aplikacja wysyła żądanie do zewnętrznego systemu płatniczego (np. PayU) w celu realizacji płatności.

- **Obsługa błędów:** Aplikacja obsługuje różne rodzaje błędów HTTP i informuje użytkowników o wystąpieniu błędów poprzez odpowiednie komunikaty.

- **Swagger:** Dokumentacja API jest dostępna dzięki narzędziu Swagger, które zawiera szczegółowe informacje na temat dostępnych ścieżek API

- **Testy jednostkowe:** Projekt zawiera testy jednostkowe dla poszczególnych funkcji, które sprawdzają poprawność działania aplikacji i reakcję na różne przypadki.

## Instalacja

1. Przejdź do katalogu projektu: `cd kantor-internetowy`
2. Zainstaluj zależności: `npm install`
3. Uruchom aplikację: `npm start`

## Technologie

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Token)
- Swagger
- HTML/CSS
- JavaScript



