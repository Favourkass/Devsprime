const courses = [
  {
    id: 1,
    title: "Introduction to Django Rest Framework",
    description:
      "This course will give you a basic introduction to the Django web framework which can be used to build powerful and secure websites in quick time",
    cover_img:
      "https://1.bp.blogspot.com/-42WDaVJa3j8/Xw73Ww75gCI/AAAAAAAAhHg/ePGNcnUyddEOg8NSXoAEe0Upiu3rUwkdACLcBGAsYHQ/s400/Django%2B3%2B-%2BFull%2BStack%2BWebsites%2Bwith%2BPython%2BWeb%2BDevelopment%2B-%2Bbest%2BUdemy%2Bcourse.png",
    type: "Free",
  },
  {
    id: 2,
    title: "Getting Started with React",
    description:
      "This course will give you a basic introduction to the React library which can be used to build powerful and secure interfaces in quick time",
    cover_img: "https://bit.ly/3dx8b3m",
    type: "Premium",
  },
  {
    id: 3,
    title: "Profesional Data Visualization with Tableau",
    description:
      "This course will give you a basic introduction to use Python for advanced data analysis operations in real world situations.",
    cover_img: "https://bit.ly/3ybrkQh",
    type: "Free",
  },
  {
    id: 4,
    title: "Web Development with Flask",
    description:
      "This course will give you a basic introduction to use Python for advanced data analysis operations in real world situations.",
    cover_img:"https://bit.ly/3qEINhv",
    type: "Premium",
  },
  {
    id: 5,
    title: "Become a Social Media Expert",
    description:
      "This course will give you a basic introduction to become a social media expert.",
    cover_img: "https://bit.ly/3wbEKdL",
    type: "Free",
  },
  {
    id: 6,
    title: "Advance your 3D Modelling Skills",
    description:
      "This course will give you a deep and solid introduction to Modelling.",
    cover_img: "https://bit.ly/3qBse6e",
    type: "Premium",
  },
  {
    id: 7,
    title: "Public Speaking Masterclass",
    description:
      "This course will give you a basic introduction to public speaking and how to get better at it.",
    cover_img: "https://bit.ly/3ha27jO",
    type: "Free",
  },
  {
    id: 8,
    title: "Advanced Logo Design",
    description:
      "This course will take you from zero to hero in professional logo design.",
    cover_img: "https://bit.ly/3dx6Vgy",
    type: "Paid",
  },
];

const instructor = {
  id: '1',
  avatar:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgREhIYEhgSGBgVGBoYGhgSGRgYGBgZGRgYGBgdIS4lHB8rIRgaJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISHjQkISE0NDQ0NDQ0MTQ0NDQ0NDQxNDExNDQ0NDQxNDQ0NDQ0NDQ0NDQ0MTQ0NDQ0NDQ0MT8xMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBQYHBAj/xABEEAACAQIDBQUDCQYFAwUAAAABAgADEQQSIQUGMUFRBxMiYXGBkaEjMjNCUmJyscEUkqKy0fA0c4LC4UOz0hZUo+Lx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAeEQEBAQEAAwEBAQEAAAAAAAAAAQIREiExUUEDE//aAAwDAQACEQMRAD8A7NCEIBCEIBEixJKEkbSSRmYrNRNKVz8vV/DT/JpdtKRj8vV9Kf8AKZYRYUuEnkNOTQ0IQtCAkIsbAIQhCiEITQIQhCkMSKYkBIhjohhDYRYkAhCEC1hCEqCEIQCEIQGmMMkkbTnUqN5ny3y1fyKD+D/maB5nF+mxH40H8AliT6uKcmkVOTQ0IkWEISJHRICQixIURIsSaBAwgYUkSLEMBIQhAI0xYkAhCEC1hCEqCEIQCEIQEjDHyNpipUbzOUvpa/8AmD+UTRsZnKH0lfzrH4BZMpPq6ThJZGklErQiTx7S2pRoLmquFvwUas3oJk9o741WOXD0sg+0/iPkbcB8ZEbiBnI8VtLG1Dd67+gYoPctp5UqYkG61XB8nYfrKvK7LEM5rs/ezGUSFrfLpcXzaOBzs/8AW83mytq0sSmek+b7SnRlPRhyge0mEITQIkWJAIkIkAiGLAwpIkWJAIQhAtYQhKghCEAhCEBDI2khjTM1KheZzCm71v8APce7LNG8zOAPjq+eIf8AMSRJ9XySm21t3Ie4ogPVPE/VS/M9T5T0bZx/cUWqC2Y+FB1dtB7uPsmRwQKjO5JZtSTxJ5kwVJ+yqpNSqTVdtSWN54cVib6C09GOqm3rKhryWumcms0Wm0TJFRJJXXj0s4YaiGAZqLirQORhxX6rjmrD+7SBoiuQZepcun7PxqVkWonBuIPFWHFT5gz1TDbA2n3T+I+CpYP5HgH9nA+XpNxeVys4IkITSCJCEAiQhCiJCEAhCECyDjrHAzxmOU2k6j1wkAqGPFQS9EkIzOOsdHQRrR0a0lETTLbLNy5616n801J4zGYLG06SGpUawatUtzJOc6AeyZiT6g3vrFqlKiPqjP7WNgfgffPBiXC6HlPXj6tOtWFem+dQgFiLFSLixB4cQZR7SqG55yUk9vLjdpMdKY/qZWNtKqvFB7Y6piXGa1O2UZtSFuOo6yuG0S4JyGy2ufnAX4X6Q6zk9LTDbWzGzLlMsErAzO00uQRLBQQLzNrtmLYODFKCZrE13PAkSOhWxA4MTNRK1dJ7aHnOg7DrF6CEm5C5CTqTkJW59wnLNm40vo4swnTt20th05XLH+IzUcdLWJCJNMFiGJCFEIQhBEvC8SFLCJCB6QY4SO8UGA+LeNBheA6KGI4GNvC8IkFU+sd3gkF4XmRMDOVYtyyU1IuB3r2GpLM5A08gJ0+Z3bVNaVRKyIFVada+UBRcDPy63McJOXrLbPb5O9iMxPHQ2HlPNXYRcHis9MvYrmZjYm5FzfUzyVqmsxxvPuo8Rh1cWM8qYAKCFJAPIaDX0nqWpEqVrW8zaZ66zMeSngwug4SwfD/JmRU61PNbvFYjkCLj2SxFZChUWk77dIyWLouWsLLpe5vb00nmwGKqZzTCd4Vv93ReJF9LWmlekDoZCMBTvciblZ1L/HmwFVXYOvXXl8J2TBU8lNE+yij4a/GcuoYdcwIHPlOrIdAbW0GnTym8uOzol4QmmBeJAxIC3heJCEEIkICwiQhU8UGNvC8BwMWJeF4C3iExCY0mA7NFBkd4t4EgM820cKtWm1Nr2YW00PsMnBikwOb7VwdPDsaVNmdQA13tclgDyAEo6jzRb5LlrnTRlBH9+2ZcvrOdaymWQY1Qy5dfZxkeKxQSeP8AbKjC602t1sTM8deq+psxc2ZWZWHPmfWTs+It4WUHzuY58UQfEpX10/OSHE0wbfES8WXke7ZFasyXq8QdNLfCew1J58NUUqCpuI121ka6v93qWeui/eBPoNT+U6ReY3cnBtrXNvsAHoRdiPTT3mbKdMx593tLeBMSJeaZLeJeF4XgEIQhAYQMSAt4RsIE8I2F4aPvEJjbwJgBMS8RjEvCHXgDG3heBIDHXkax4MDH9oGFuiVF+eA2g1zKACfaOPsnPErXnQO0HEFBSymxGdh63W35TnGPqqrq6jKlYF16KwNnT2Ne33SszVh+IFzeRNiinlFSurc5HiCtph1y9KbURxlqKrjzkj1sKy5e5UegsfeJRlUP1ZOtEDUQ6d9H0QyVLISUc8Drb2y7RLt1lRQNjmPKdA3Q2C5IxFVSgGqLex15sOWh0/8Aya446vGq2LhRTpIg5DUjmTqT/fSWN40QvNuR0I28LwpbwvEvCAsIkIBeEbFvCFhEvEgS3heJC8NHXjSYXiEwAmJeJeJeEOvI69dUUu7BQOv6Dn6Tw7b2qmGpNWfW2ij7THgP76Tk21d7K9Vy3C+gHAAdBEz1nWuOrUd48MxsXan5ujoP3rWHttPQm38GXWmMQhZzlUBr3J4C/C84idtVhxJ/ONqbYzfSKD94eEj0YTXiz5Vv+0rEjvET7KXP+pj/AEmCqpno1E4mmVrL71R/ZZkP+iNx20zVOd6jMbAXclyQNBdp5aGLKOHFn4gi+jKwKsp8ipImfGtzUsVTOw5yRMa3BtbT0bUwoQh6ZLU6gzITxtezI331Oh9h4EStKmOLOx7RixJlx5tYSvWnLLZ2GQsWqGyU1z1D9xbeEebMVQebCTkb8qvN3q1Ok9PEYq2QvlRSLl+RdV6Le+Y6XFtTO3IBYZeHKfNWKxzu7VX4nRVHBFGioo5KBpNvu92gYlEFJlSoFNgWzFgPs3B1E341y1r27BeJKmvt+jTpJWr5qK1APnKxAYi+UkDQ8eNuE92DxtOqgqUqi1Ebgym4/wCD5TPKvXoMLxyoTEdAozFgANSToAOpMKbeLeV2zdtYXEM9OhVFRqYubAgEcLqTx9nlPdeLLPqH3i3kd4sKdCNhAWESEIlvCMvHCGy3jTJkofa0kl1UX0UDiTp7zCdedKDHy9YlTCkiwqZfMAH85U4/fLB0iV7w1WHJBmHpmJC/GVB7RKN9aFQDqChPuv8ArNTOr/HO6j2bW3WWt8/FVjbhcqVHooAAlfhdwcIoPeF6p5FjkA9iy72ZvDhsT9HUGbmjeB/cePsvLLOFBZiFA1JOgHqTwi+U9HJfbjO9Gy/2aoUIuraoT06eszdRBxX3TpG+O8+CqA0e6/act/GGyBT1RrEn3W9ZzLEaMcl8vLNqfbbQ+4TUl4xZO+kZQa6WkJJEmSqSbGRvYNLYR7NmVQ4bDOQFqkFGOgSsNEYnkrfMbyKn6s8LXUlXUqVJUg6EEGxBHWIQOvHlLLHHvaYxPF6eWnX6k2tSqnqWAKk/aQfameNyvGhHK5J0txJJ4ADmZ69pt3ajCgjMGz1yNRnGi0rjjkBN+WZm6COwzfsyLiP+rVBNEH6iag1yPtEghB6tyWVKi+vGM57Wrr1wgS/kBPdsTaJoVlqqq1DTNwr3senDodZ4qgBHS00WA3Hxb4b9tXIBbMtMk53XqNLC/IGdOc+s/XVt3toptHCMa9JbZijpqVJFiGHMcR7pl98N6FwwGAwWWmEWzsnFb/UU8jzJ46zBYKtWBFOg9QNU8OWmzqXPIEKRf2za7O7MqrhXxFVaYOrKl3fXlc+EH3y2Zze1O2+mLobTrUnFWnVdG45lYg3536y2x29OMrpkqYh3QixW4UN5Gw1HkZ0B9wcE2HfD01Ku2q1XJd1ccOnh5FRPTsLdyhhE7o00qk6s7orM59o0HQSX/TP4eNZHs52TXesuLR+7SmbXILd5yZAL8Op6zaUd78Kar0ahNI03ZLtqhysV4jhw5y7oogtkAUDgAAAPQDhOL720zRx2IQCwNQuPR/H/ALpM83b0suZ6dso1VcZkYMDzUhh7xHgzmm4+xcQzpiyzU6QubBmTvTwAAHFb8TztOmOLGc9Z8byNZts9i8S8beLeZaOhG3iwHLroJ6EbKbdYymmXjxiV2trCsNvxtHFUK47uu6I6hlAYgAjQjz6+2ZDHbcxNYWq1nqDoT4fcNJ0LfDYlXF5O7ZV7sMTmuLk5bWsJhBuhj82XuDxtfMuX1vedsazz246l6pa9awnlSsb8ZuE7OqxW9SuiN0AL29TpG4Ts6qZwatdcl9cgJY+mbRfjNXWf1nwrFGoQbgkEagjSx8pNiNoVnFnqvUHRnZx7iZt9t9nYCZsJUZmH1KhXX8LACx9ZkG2BjA2Q4Wrfypsw9hAsZZqUubFU5kDTXYPcPH1NTTFIdXYKf3Rc/CX2C7Naa6167ueiAUx72ufyk1rMWZrloGsRsO7sFRWcnkoLH3DWdR3m3WweHwlV6dKzqEs7MzMLuoNrmw0JE8/ZiPBW/Gp96/8AEzdTx61z2yGA3Gx9Wx7k0lPOoRT/AIfnfCbHYfZytIsa+INQVEam6IuVWVraFmubghWBFtVE3cno076nQcpyuq1IqKG6mDDmo2GRjooLjvLKoCqqhrhVAAAAA4RNq7s4KuhpthkXoyKKbj0Zbe43EvXNzaOyhRJLWuOVnsw+WBOIvSzAlStnK8wWBt7bTptXDAUu7UWAUADpbhMptff/AAeHdkUNiXU2OSwQHpnOh9l5UP2r66YPTnerr/JOnjrTPZFThcuC2qLjLTrNpfgqVD8Mrj3CdlRbC04LvfvNTxjIyYc0SmYXLhswa2lgo5ia7ZXahTSmiV6FRnRFVnQoQ5AALWJFr8fbNazqyfpLI6HVWxuI3E0wy35jWcx232nu6lcLR7sn67kOR+FBpfzJPpMjsveLEU8QuKao1RwbtnYkOvAqegI6cJmf5X+rdR29cQqi7MFC6kkgADqSeEx2J2fhdobRWqlQVKVNFFQrezuhOVAeYK8SPs+cwu9G9VbFtlI7qmDoikm56u2mbyHASz7OcYVrNT+0Aw9Rof5pZm5lv9S3rs9EC4UABU0AGgAHAAT0kAjWc73g3/p4ZjQoItZ10difAh6aasfymMx+/e0Kp1r90Ps0h3Y8tblj75mYtXsdnr4qmjrTeooepfIpIu1ugk15zjdDYuOq10xeKz5U1Bqsc7aeGynUC5vrabbG7dwdI5amJQMOIU5j7heTWefPZKsbxJR/+rtnf+4/hb+kJnl/F6xlPfjGo1zUWoOjKLfCxlxh+0SmwtWosn3kOcfumx+M507SJmnpuM1zlru+xtp069MVKbZlOZb8NQdQRyliHAnK+zTbASo2Ec27zxp+IDxD3Ae6dKZp59Z5eOk9nu9zBpEscx0kV6V1EfTnlXEIou7BAOJYhR7zEp7Tw9i/f08o4nvEt77xJUe8CNamJQ4zfbZ1PQ4lXP3A1T4qLSnxHabgR81azeiKPzYS+N/E7Hp7RHC4KqPtZP8AuJM12ZN4K340/lM8G9O+tHF0mo06dRSShu4QCysDyYmVO728xwaOiUhUeowYFmIVbLYXUDX4TpM3x4z326BvJvXSwllyd7UIzCnfKAORdrGw8rXMptmdplSrWSk+EUd46ICjm4LsFBsV149ZznHYypVdqlRizuSzE8zPXurUVMbhnbgtenf2uB+s14ZkOus1N/8AZ6O6O7q1N3Qju2a5RipykaEaTKb29oBroaOFVqaNo7to7D7KgHwjrrflpMk+ysQ+JqUadN6jpUdWCgk3DsCT0GnEz2VN2KyVkoYmpRwhdC4NWoMoAIGUlM1m1vY205yzGZ7S21n4qqTZVBJOgA1JPQATdY/s8Wjh2xVTHJkVMwK03dWJ0QZg3AkgXtzmFoOVZXzMmVlbMvzlsQcy+Y4zcspwlbB1hxpVBrzRx+kVzyIsRxB0I8iOU6jtreTG4Op3eOVcRQqG9OtTXISB1UG2YX1XTyJmH3tpp3/fUmDpiVFRWB0vwceRuL2+9My+1sUZaIDLbZm7WMxFjSw7sptZz4EseeZrAj0vNpsXsuOjYusPwUrn2F2A+A9sXciSVzWuL+L3x2DxtSkS9NyjFSlxxs3G3Sdxq7h7ONM01o5CRo4Zi4PW5J93CZLFdlnjHd4rwa5s6eMHkFsbH229sxdytcc3w6M7BEBZnIAA1JJ4ATqWwNgYbZ1L9txtnqCxVdGCE8FQH5z+fL4yPcbdgYctiawu92Wnf6qAkZ7cmYa+QPmZlN9NvnE4ggH5OiSiDlcGzP6k3HoBMeXfRxabf3zxOJuqnuafJENiR99ufoLCZZ6khWppGO86T1BLniyC8JOnFlUDKSrCxU2IOhBHEESNmnWt7d0UxXy1EinWHG+iuPPofOc42juzjKNy9B2HVPlB/DrNZ3LF8Xh2XjzQrJXAv3bhrcLjgR7iZtX7S25YVfbUP6LOd1QQSCCCOR0PujM0lkv1Pjoq9ptTnhU9lRv/ABkGK7S65FqeHRPMs1T4aTAlo3NHjn8O1ZbU2ziMS+etUL9BwRfwqNBPL3pEgQ8zJEou9yiM4HEqpYD1sNJqek4GqmRM0bFVSdALk8ANbx1EmHPEy13e2X+1YlcMagpGoGysVLgsqlstrjiAZ58TsyrQCd6uQ1FzhTowFyBmHI6cOU7H2f7LpJg6NQ00zuC5cqM/iYlfFa/AgSa14zqye2Br7lUkco+06JZSQURHqvccQEQk38ps9z9x8LSdMSe9qOpJUVlWnYjg4TiOoubibTD4WmhJREQkliVULcniSQNTFDDONeR/Sctbta8VPtXZFR62eji3winV1pol3e58bswNzaw16SPae7GExGQ4pDVdAB3l+7drcnKZbiW9UeInqTEzTPlV5Hnwux8OlE4QUwaLAjIxNRbHUjxE89ZWtuhs7gcHS/dt+sv1ay3jWN9eseVXkefGbOo1KQp1KSVEFhlcBx4dARfmOs5p2h7EppQFSlTWn3L6hVCeB7KdB55J1enqCJQbxYFaiOhXSorIefEaH++kudcpYoOyjaYqYVsM58WGchddcj3ce5s49gm77s8tZw/s2xpo48UXOUVg1Fh99blf4lK/6p29HK8Zdz2k+GVXsD6GYjaG8ZDCkp8b/wAI5sZssVVHETiW8T1cNjHLjRzmRuTJfS3pwImJFbPb21jSwtSoDqEyr+JrKPznHwZst4do95ggQfnOl/YSf0mKBmso9KtpEZ41DBprpw7PCRXhHR9K5rR5IbyP98Ziq3aTg7aUax9iD/dPBU7TKY+bhXPq6j8gZnw0vWv2ps2jVFq1FKn4lB+PGcg3z2YmHr5aa5UdQwGpsbkEC/smoqdp1xY4P/5P/pKXau08PjymYtQZTbWzceh5i81JrP1GTvEJm32Vudh3cK9d2B+yFX+s0J7OsH9ur+8v/jL5xOMNuSD+2UGyF1D5W8JYWdWTX96bbbe2sfRrnD7PwdqVGy6UiVdrAtYiwC6206TWbB2VSw1EUaQIUEtqbkljcknnLWjTv6SXfV4we9W6TYyjTxdGiKWIcLnpmyXDDXNyzKefMSfcfcc4Z2r4nI72AQLdgl75muQPFwA6a9ZvH6CMqOqKWPBQWPoBc/lM+V+HHFe0LFZ8c6LwpBKIt1UXPxZp2XZmHFOjTQcERE/dUCcDwbnE4xHJ1r4gOefznzn4Xn0JRcZACfKa36kiSHC/EGeestyPI6+klNQDUNw908tfH0gcudAbMxGZb2UXJt0tOfGnow6+Ejne8bflKivvZgV+di6I/wBYP5SrxPaFs5P+uX/AjN8bS+NOtfUOkfRF1/Kc7r9qOEHzKdap7EQfFr/CVOM7VKpFqOFSn0Z3NT+EAD4zU/z1TyjrSaHj7tZRbd3kwNAEVq6Kfsg53/cW5nF9q72Y7EXFTEOFP1UPdr6WXj7byhJAmv8An+1nq02lj0/anxOHuFFUVUuLEMCHuR+IGb7Gb7bUW2XZ6WdQysveVVYMLggr+tpypWl/T3vxSUkoU8iimoUMRmYgcOOg08paOh7E23jnV2xtNKQGUpYZeubMCxty4zmm87OaxL4kYm5axDZ8i38KnkDbp0ngxu069b6Wq7+RPh/dGkTAbNr1yVo02e3G3AepOgmVSUsVfDvSP1WVh6XF54gZttzN23NZ0xCKUak6uCbnxFbW6EEcfKVe9O6dTBnOrd7SY2D2sVJ4Bxy9eBmexWfBjyZEI4GaBeEWED3tIzCE7Vkxo0cR6iEJnXxXTd1fnJ6fpN1y9kIThVemnwHpPdS4QhIGrPBtr6Ct/lP/ACmEIK4Xun/jMP8Aj/2tO5Yj9IQnT/T+JGI38+i98wW4/wDjR/l1/wDsvCEufiVQpwjlhCdEOEcsIShGkTQhM6VOPoR+M/yieZoQmP4pJ1vcX/CpCEzfgttl/S1fUfmY3ev/AAWI/wAp4kJz/quIwEIToHQhCB//2Q==",
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
  twitter: "https://www.twitter.com",
  fullname: "Sodiq Olatunde",
  description:
    "Sodiq Olatunde is a senior software engineer and stack lead at Decagon Institute, Lagos. He also teaches user experience design on a weekly basis to the community.",
};

export { courses, instructor };
