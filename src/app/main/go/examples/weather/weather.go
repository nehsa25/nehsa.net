package weather

import (
        "encoding/json"
        "fmt"
        "io"
        "net/http"
        "os"

        "github.com/gin-gonic/gin"
        "github.com/joho/godotenv"
)

type WeatherResponse struct {
        Main struct {
                Temp float64 `json:"temp"`
        } `json:"main"`
        Weather []struct {
                Main string `json:"main"`
        } `json:"weather"`
}

func getWeather(city string) (WeatherResponse, error) {
        apiKey := os.Getenv("OPENWEATHER_API_KEY")
        url := fmt.Sprintf("https://api.openweathermap.org/data/2.5/weather?q=%s&appid=%s&units=metric",   
 city, apiKey)

        resp, err := http.Get(url)
        if err != nil {
                return   
 WeatherResponse{}, err
        }
        defer resp.Body.Close()

        body, err := io.ReadAll(resp.Body)
        if err != nil {
                return WeatherResponse{}, err
        }

        var weatherData WeatherResponse
        err = json.Unmarshal(body, &weatherData)
        if err != nil {
                return WeatherResponse{}, err
        }

        return weatherData, nil
}

func generateAsciiWeather(weather string) string {
        // Implement ASCII art generation logic based on weather condition
        // ...
        return asciiArt
}

func main() {
        err := godotenv.Load(".env")
        if err != nil {
                panic("Error loading .env file")
        }

        router := gin.Default()

        router.GET("/weather/:city", func(c *gin.Context) {
                city := c.Param("city")
                weatherData, err := getWeather(city)
                if err != nil {
                    c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
                    return
                }

                asciiWeather := generateAsciiWeather(weatherData.Weather[0].Main)
                c.String(http.StatusOK, asciiWeather)
        })

        router.Run(":8080")
}