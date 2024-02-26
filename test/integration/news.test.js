describe('Integration Tests', () => {
    let server;
  
    beforeAll((done) => {
      server = app.listen(done);
    });
  
    afterAll((done) => {
      server.close(done);
    });
  
    it('should return a 200 OK status code for POST request to /news/match', async () => {
      const response = await request(server).post('/news/match').body({
            title: "Match title 1",
            description: "dfsdfsdfdsf",
            tourId: 1
      });
      expect(response.status).toBe(200);
    });

    it('should return a 200 OK status code for POST request to /news/tour', async () => {
        const response = await request(server).post('/news/tour').body({
            title: "Tour title 1",
            description: "dfgdfgfg",
            sportId: 1
        });
        expect(response.status).toBe(200);
    });
    it('should return a 200 OK status code for GET request to /news/match/1', async () => {
        const response = await request(server).get('/news/match/1');
        expect(response.status).toBe(200);
    });
    it('should return a 200 OK status code for GET request to /news/tour/1', async () => {
        const response = await request(server).get('/news/tour/1');
        expect(response.status).toBe(200);
    });
    it('should return a 200 OK status code for GET request to /news/sport/1', async () => {
        const response = await request(server).get('/news/sport/1');
        expect(response.status).toBe(200);
    });

  });