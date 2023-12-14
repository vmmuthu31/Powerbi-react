import logo from "./logo.svg";
import "./App.css";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        // merchant view
        <PowerBIEmbed
          embedConfig={{
            type: "report", // Supported types: report, dashboard, tile, visual and qna
            id: "0da61dde-6757-4d7a-bcdc-094079c1ca9d",
            embedUrl:
              "https://app.powerbi.com/reportEmbed?reportId=0da61dde-6757-4d7a-bcdc-094079c1ca9d&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
            accessToken:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMTU5NzA2NTAtYTlmYS00MDQ1LTk5NGYtYzhlOGE1MDA5ZGVjLyIsImlhdCI6MTcwMjU1NDE0MSwibmJmIjoxNzAyNTU0MTQxLCJleHAiOjE3MDI1NTkwODQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VkFBQUFwMzVaMmpHUEp3TlF1WVNvS3NYdnZXTld6RURWc1ZKN05oblNUd3UrbGFOTE9TeHR6SnMvNEFMZ0NPRUhHM3VnIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiU2hhcm1hIiwiZ2l2ZW5fbmFtZSI6IkFydmluZCIsImlwYWRkciI6IjI0MDU6MjAxOmUwMDk6ZDEyNjplY2YzOmJkNzM6N2ExZTphZTMyIiwibmFtZSI6IkFydmluZCBTaGFybWEiLCJvaWQiOiJiYjYzNjllYy1kNzAyLTRlZGEtYjIzMy00MDI1NmJkNDYxZmYiLCJwdWlkIjoiMTAwMzIwMDI3MTRGMzNFRSIsInJoIjoiMC5BU3NBVUFhWEZmcXBSVUNaVDhqb3BRQ2Q3QWtBQUFBQUFBQUF3QUFBQUFBQUFBQXJBRzQuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiRVhjN01ZNEVuNE96RDVBQkUyZk9Lei1CblBxSFlJU1dWc20tZ0QtQUhaSSIsInRpZCI6IjE1OTcwNjUwLWE5ZmEtNDA0NS05OTRmLWM4ZThhNTAwOWRlYyIsInVuaXF1ZV9uYW1lIjoiZGVtb0BibHVwYXJyb3QuaW4iLCJ1cG4iOiJkZW1vQGJsdXBhcnJvdC5pbiIsInV0aSI6Im5QMUJXbEZvOGtlbkIyZXRLNHRtQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.AaJnMzLCCTV9MxNTV_0Qd5tT7f4zs4p_GNqBXC2tp77rWbXYW2L7b3Q9j3lf7sboBFgmUuXr-Vn6QPhb-5SXa_v7eDnJIRGkveMZugKEGRrujZJmM8snA4w0pXZu5lb8UnsaYx60DYL6Gow2MRt_JhGtFOS4u7z17d7K6J9dPr6xnEW9_D_oKm-p6QOx-WrPIFdwiilUf1llF986ARkOH160lt99WYlgI-JlqsaXxIHlPOg1AbDQLwJsCBu950HuZ6tizvX7M-0BTpzsS_XtXY4Y5GrUuFZfyte2WDGfZ82ERPzroVCnDcTrfascaz7husm5fC7zWUMAz1q6QqTsoQ",
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true,
                },
              },
            },
          }}
          eventHandlers={
            new Map([
              [
                "loaded",
                function () {
                  console.log("Report loaded");
                },
              ],
              [
                "rendered",
                function () {
                  console.log("Report rendered");
                },
              ],
              [
                "error",
                function (event) {
                  console.log(event.detail);
                },
              ],
            ])
          }
          cssClassName={"Embed-container"}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
        // investor dashboard
        <PowerBIEmbed
          embedConfig={{
            type: "report", // Supported types: report, dashboard, tile, visual and qna
            id: "7ccb0682-7c29-4031-9f7b-ca4d1b6c03ed",
            embedUrl:
              "https://app.powerbi.com/reportEmbed?reportId=7ccb0682-7c29-4031-9f7b-ca4d1b6c03ed&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
            accessToken:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMTU5NzA2NTAtYTlmYS00MDQ1LTk5NGYtYzhlOGE1MDA5ZGVjLyIsImlhdCI6MTcwMjU1NDE0MSwibmJmIjoxNzAyNTU0MTQxLCJleHAiOjE3MDI1NTkwODQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VkFBQUFwMzVaMmpHUEp3TlF1WVNvS3NYdnZXTld6RURWc1ZKN05oblNUd3UrbGFOTE9TeHR6SnMvNEFMZ0NPRUhHM3VnIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiU2hhcm1hIiwiZ2l2ZW5fbmFtZSI6IkFydmluZCIsImlwYWRkciI6IjI0MDU6MjAxOmUwMDk6ZDEyNjplY2YzOmJkNzM6N2ExZTphZTMyIiwibmFtZSI6IkFydmluZCBTaGFybWEiLCJvaWQiOiJiYjYzNjllYy1kNzAyLTRlZGEtYjIzMy00MDI1NmJkNDYxZmYiLCJwdWlkIjoiMTAwMzIwMDI3MTRGMzNFRSIsInJoIjoiMC5BU3NBVUFhWEZmcXBSVUNaVDhqb3BRQ2Q3QWtBQUFBQUFBQUF3QUFBQUFBQUFBQXJBRzQuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiRVhjN01ZNEVuNE96RDVBQkUyZk9Lei1CblBxSFlJU1dWc20tZ0QtQUhaSSIsInRpZCI6IjE1OTcwNjUwLWE5ZmEtNDA0NS05OTRmLWM4ZThhNTAwOWRlYyIsInVuaXF1ZV9uYW1lIjoiZGVtb0BibHVwYXJyb3QuaW4iLCJ1cG4iOiJkZW1vQGJsdXBhcnJvdC5pbiIsInV0aSI6Im5QMUJXbEZvOGtlbkIyZXRLNHRtQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.AaJnMzLCCTV9MxNTV_0Qd5tT7f4zs4p_GNqBXC2tp77rWbXYW2L7b3Q9j3lf7sboBFgmUuXr-Vn6QPhb-5SXa_v7eDnJIRGkveMZugKEGRrujZJmM8snA4w0pXZu5lb8UnsaYx60DYL6Gow2MRt_JhGtFOS4u7z17d7K6J9dPr6xnEW9_D_oKm-p6QOx-WrPIFdwiilUf1llF986ARkOH160lt99WYlgI-JlqsaXxIHlPOg1AbDQLwJsCBu950HuZ6tizvX7M-0BTpzsS_XtXY4Y5GrUuFZfyte2WDGfZ82ERPzroVCnDcTrfascaz7husm5fC7zWUMAz1q6QqTsoQ",
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true,
                },
              },
            },
          }}
          eventHandlers={
            new Map([
              [
                "loaded",
                function () {
                  console.log("Report loaded");
                },
              ],
              [
                "rendered",
                function () {
                  console.log("Report rendered");
                },
              ],
              [
                "error",
                function (event) {
                  console.log(event.detail);
                },
              ],
            ])
          }
          cssClassName={"Embed-container"}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
        // platform view dashboard
        <PowerBIEmbed
          embedConfig={{
            type: "report", // Supported types: report, dashboard, tile, visual and qna
            id: "960b018e-bf97-49c4-8967-de4a19b2a899",
            embedUrl:
              "https://app.powerbi.com/reportEmbed?reportId=960b018e-bf97-49c4-8967-de4a19b2a899&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
            accessToken:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMTU5NzA2NTAtYTlmYS00MDQ1LTk5NGYtYzhlOGE1MDA5ZGVjLyIsImlhdCI6MTcwMjU1NDE0MSwibmJmIjoxNzAyNTU0MTQxLCJleHAiOjE3MDI1NTkwODQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VkFBQUFwMzVaMmpHUEp3TlF1WVNvS3NYdnZXTld6RURWc1ZKN05oblNUd3UrbGFOTE9TeHR6SnMvNEFMZ0NPRUhHM3VnIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiU2hhcm1hIiwiZ2l2ZW5fbmFtZSI6IkFydmluZCIsImlwYWRkciI6IjI0MDU6MjAxOmUwMDk6ZDEyNjplY2YzOmJkNzM6N2ExZTphZTMyIiwibmFtZSI6IkFydmluZCBTaGFybWEiLCJvaWQiOiJiYjYzNjllYy1kNzAyLTRlZGEtYjIzMy00MDI1NmJkNDYxZmYiLCJwdWlkIjoiMTAwMzIwMDI3MTRGMzNFRSIsInJoIjoiMC5BU3NBVUFhWEZmcXBSVUNaVDhqb3BRQ2Q3QWtBQUFBQUFBQUF3QUFBQUFBQUFBQXJBRzQuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiRVhjN01ZNEVuNE96RDVBQkUyZk9Lei1CblBxSFlJU1dWc20tZ0QtQUhaSSIsInRpZCI6IjE1OTcwNjUwLWE5ZmEtNDA0NS05OTRmLWM4ZThhNTAwOWRlYyIsInVuaXF1ZV9uYW1lIjoiZGVtb0BibHVwYXJyb3QuaW4iLCJ1cG4iOiJkZW1vQGJsdXBhcnJvdC5pbiIsInV0aSI6Im5QMUJXbEZvOGtlbkIyZXRLNHRtQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.AaJnMzLCCTV9MxNTV_0Qd5tT7f4zs4p_GNqBXC2tp77rWbXYW2L7b3Q9j3lf7sboBFgmUuXr-Vn6QPhb-5SXa_v7eDnJIRGkveMZugKEGRrujZJmM8snA4w0pXZu5lb8UnsaYx60DYL6Gow2MRt_JhGtFOS4u7z17d7K6J9dPr6xnEW9_D_oKm-p6QOx-WrPIFdwiilUf1llF986ARkOH160lt99WYlgI-JlqsaXxIHlPOg1AbDQLwJsCBu950HuZ6tizvX7M-0BTpzsS_XtXY4Y5GrUuFZfyte2WDGfZ82ERPzroVCnDcTrfascaz7husm5fC7zWUMAz1q6QqTsoQ",
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true,
                },
              },
            },
          }}
          eventHandlers={
            new Map([
              [
                "loaded",
                function () {
                  console.log("Report loaded");
                },
              ],
              [
                "rendered",
                function () {
                  console.log("Report rendered");
                },
              ],
              [
                "error",
                function (event) {
                  console.log(event.detail);
                },
              ],
            ])
          }
          cssClassName={"Embed-container"}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
