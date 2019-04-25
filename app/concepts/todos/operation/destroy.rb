module Todos::Operation
  class Destroy < Trailblazer::Operation
    step ->(options, params) { options["representer.render.class"] = Todos::Representer::Create }
    step ->(options, params) { options["representer.errors.class"] = Reativo::Representer::Errors }
    step Model( Todo, :find )
    step :destroy!

    def destroy!(ctx, params:, current_user:, **)
      ctx[:model].destroy
    end
  end
end
