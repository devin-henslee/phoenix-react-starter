defmodule ElixrReactStarter.Repo do
  use Ecto.Repo,
    otp_app: :elixr_react_starter,
    adapter: Ecto.Adapters.Postgres
end
