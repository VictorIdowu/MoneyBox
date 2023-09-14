export const timeOut = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const fetchData = async function (url) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3${url}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDc1ZTBjNWM4YTJlNmUzYTc1Njk0NmNhZjljNTQ3ZiIsInN1YiI6IjY0ZmYzYzhjZGI0ZWQ2MTA0MzA4OTQxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JD_4R2fldzk7vT__lGZV3XLLfhfiJaWvnU_C7Jn2-_E",
      },
    });

    if (!res.ok) throw new Error("Bad Network");
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export default fetchData;
